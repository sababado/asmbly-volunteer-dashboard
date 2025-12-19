"""
Script: verify_setup.py
Location: apps/backend/scripts/verify_setup.py
Purpose: 
    Verifies the backend structural setup by mocking AWS Secrets Manager and 
    instantiating core services (ClickUp, Slack, Neon, DynamoDB).
    It ensures that the FastAPI app can initialize and that configuration 
    loading works as expected without needing real AWS credentials.

Expiration:
    This script is intended for the initial setup phase. Once integration tests 
    and real deployment pipelines are established, this script may be deprecated 
    or evolved into a proper integration test suite in `tests/`.

Usage:
    Run from the project root:
    export PYTHONPATH=$PYTHONPATH:$(pwd)/apps/backend
    python3 apps/backend/scripts/verify_setup.py
"""

import sys
import os
import json
from unittest.mock import MagicMock, patch

# Add apps/backend to path so we can import 'src'
# Assuming running from project root
sys.path.append(os.path.join(os.getcwd(), 'apps', 'backend'))

def test_backend_setup():
    print("1. Setting up Mocks for AWS Secrets Manager...")
    
    # Mock Boto3 to avoid real network calls
    mock_boto = MagicMock()
    mock_client = MagicMock()
    
    # Define what the mock returns when get_secret_value is called
    def get_secret_side_effect(SecretId):
        if SecretId == "prod/neon_token":
            return {'SecretString': json.dumps({"NEON_ORG_ID": "mock_org", "NEON_API_KEY": "mock_key"})}
        elif SecretId == "prod/slack-maintenance-bot-token":
            return {'SecretString': json.dumps({"SLACK_MAINTENANCE_BOT_TOKEN": "mock_slack_token"})}
        elif SecretId == "clickup/api/token":
            return {'SecretString': json.dumps({"CLICKUP_API_TOKEN": "mock_clickup_token"})}
        return {}

    mock_client.get_secret_value.side_effect = get_secret_side_effect
    mock_boto.client.return_value = mock_client
    
    # Apply the patches
    with patch('boto3.session.Session', return_value=mock_boto):
        print("2. Import config and test secret loading...")
        try:
            from src.core.config import get_settings
        except ImportError:
            # Fallback if running directly from script folder
            sys.path.append(os.path.join(os.getcwd(), '..'))
            from src.core.config import get_settings

        
        # Clear cache to ensure we hit the mock
        get_settings.cache_clear()
        settings = get_settings()
        
        # Verify secrets were "loaded" from our mock
        assert settings.NEON_ORG_ID == "mock_org", f"Failed to load NEON_ORG_ID. Got: {settings.NEON_ORG_ID}"
        assert settings.SLACK_MAINTENANCE_BOT_TOKEN == "mock_slack_token", "Failed to load Slack token"
        assert settings.CLICKUP_API_TOKEN == "mock_clickup_token", "Failed to load ClickUp token"
        print("   ✅ Configuration loaded successfully with mocked secrets.")

        print("3. Instantiating Services...")
        from src.services.clickup import clickup_service
        from src.services.slack import slack_service
        from src.services.neon import neon_service
        from src.services.dynamo import dynamo_service
        
        assert clickup_service.token == "mock_clickup_token"
        assert slack_service.token == "mock_slack_token"
        assert neon_service.api_key == "mock_key"
        print("   ✅ Services instantiated with correct config.")

        print("4. Testing FastAPI endpoint...")
        from fastapi.testclient import TestClient
        from src.api.app import app
        
        client = TestClient(app)
        response = client.get("/")
        assert response.status_code == 200
        assert response.json()["message"] == "Welcome to Asmbly Volunteer Dashboard API"
        print("   ✅ FastAPI root endpoint responded 200 OK.")

if __name__ == "__main__":
    try:
        test_backend_setup()
        print("\n🎉 ALL CHECKS PASSED!")
    except Exception as e:
        print(f"\n❌ FAILED: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
