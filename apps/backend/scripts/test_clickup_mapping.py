
import sys
import os
import json
from unittest.mock import MagicMock, patch

# Add src to path
sys.path.append(os.path.join(os.getcwd(), 'apps', 'backend'))

def test_clickup_mapping():
    print("1. Mocking environment and config...")
    
    # Mock settings to avoid real AWS calls
    mock_settings = MagicMock()
    mock_settings.CLICKUP_API_TOKEN = "mock_token"
    
    with patch('src.core.config.get_settings', return_value=mock_settings):
        # Import service AFTER patching
        from src.services.clickup import clickup_service
        from src.domain.schemas import ClickUpWebhookPayload
        
        print("2. Loading sample payload...")
        sample_payload = {
            "tasks": [
                {
                    "id": "86abchdnq",
                    "name": " Metal Shop - Other",
                    "text_content": "Issue type: Equipment Problem\nArea:  Metal Shop\nEquipment:  Other...",
                    "description": "...",
                    "status": {"status": "in progress"},
                    "date_created": "1756480173208",
                    "date_updated": "1763769588988",
                    "url": "https://app.clickup.com/t/86abchdnq",
                    "custom_fields": [
                        {
                            "id": "34389c82-a2cf-423f-ace3-8d352a771f09", 
                            "name": "Problem Type", 
                            "type": "drop_down", 
                            "value": 0, # Index 0 matches "Equipment" in user sample config
                            "type_config": {
                                "options": [
                                    {"name": "Equipment", "orderindex": 0},
                                    {"name": "Cleaning", "orderindex": 1}
                                ]
                            }
                        },
                         {
                            "id": "f4923783-74db-42ca-bda3-82bbca58abfe", 
                            "name": "Workspace", 
                            "type": "drop_down", 
                            "value": 5, # Index 5 is Metal Shop
                            "type_config": {
                                "options": [
                                    {"name": "Metal-Shop", "orderindex": 5}
                                ]
                            }
                        }
                    ]
                }
            ]
        }
        
        print("3. Processing payload...")
        payload_model = ClickUpWebhookPayload(**sample_payload)
        reports = clickup_service.process_webhook_payload(payload_model)
        
        print(f"4. Verifying results (Count: {len(reports)})...")
        assert len(reports) == 1
        report = reports[0]
        
        print(f"   - Title: {report.title}")
        print(f"   - Area: {report.area}")
        print(f"   - Problem Type: {report.problem_type}")
        print(f"   - Status: {report.status}")
        
        assert report.title == " Metal Shop - Other"
        # Logic in service should extract "Metal-Shop" from Workspace dropdown index 5
        assert report.area == "Metal-Shop" 
        assert report.problem_type == "Equipment"
        assert report.status == "in progress"
        
        print("\n✅ ClickUp Payload Mapping Verified!")

if __name__ == "__main__":
    try:
        test_clickup_mapping()
    except Exception as e:
        print(f"\n❌ FAILED: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
