import os
import json
import boto3
from typing import Optional, Dict, Any
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    """
    Application Settings.
    Reads from environment variables first, then optionally from .env file.
    """
    APP_ENV: str = "dev"
    AWS_REGION: str = "us-east-2"
    
    # Secrets (populated from AWS Secrets Manager)
    NEON_ORG_ID: Optional[str] = None
    NEON_API_KEY: Optional[str] = None
    SLACK_MAINTENANCE_BOT_TOKEN: Optional[str] = None
    CLICKUP_API_TOKEN: Optional[str] = None

    model_config = SettingsConfigDict(case_sensitive=True)


def get_secret(secret_name: str, region_name: str = "us-east-2") -> Dict[str, Any]:
    """
    Fetches a secret from AWS Secrets Manager.
    """
    # If running locally without access to AWS, return empty dict or mock
    # In a real local dev env, you might want to use LocalStack or .env files
    if os.getenv("IS_OFFLINE"):
        return {}

    try:
        session = boto3.session.Session()
        client = session.client(service_name='secretsmanager', region_name=region_name)
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
        
        if 'SecretString' in get_secret_value_response:
            return json.loads(get_secret_value_response['SecretString'])
        return {}
    except Exception as e:
        print(f"Error fetching secret {secret_name}: {e}")
        return {}

@lru_cache()
def get_settings() -> Settings:
    """
    Creates the Settings object, populating secrets from AWS.
    This function is cached so we don't hit Secrets Manager on every request.
    """
    # 1. Load basic env vars
    base_settings = Settings()
    
    # 2. Determine secret names based on environment (or hardcode based on screenshots)
    # The screenshots show names like "prod/neon_token". 
    # Ideally we'd use f"{base_settings.APP_ENV}/neon_token", but let's stick to the visible ones for now/dev defaults.
    # Note: In a real 'dev' environment, we might use 'dev/neon_token'. 
    # For this implementation, I will attempt to read the 'prod' ones if APP_ENV is prod, or fallbacks.
    
    # Let's assume standard mapping for now based on the visual evidence provided.
    env_prefix = "prod" if base_settings.APP_ENV == "prod" else "prod" # Defaulting to prod for now as those are the known secrets

    secrets_to_fetch = {
        f"{env_prefix}/neon_token": ["NEON_ORG_ID", "NEON_API_KEY"],
        f"{env_prefix}/slack-maintenance-bot-token": ["SLACK_MAINTENANCE_BOT_TOKEN"],
        "clickup/api/token": ["CLICKUP_API_TOKEN"] # This one didn't have a prefix in the screenshot list, but secret name details showed it.
    }
    
    secret_values = {}
    
    for secret_name, target_keys in secrets_to_fetch.items():
        data = get_secret(secret_name, base_settings.AWS_REGION)
        
        # Map the keys from the secret JSON to our Settings fields
        # Screenshots show:
        # neon_token -> NEON_ORG_ID, NEON_API_KEY
        # slack... -> SLACK_MAINTENANCE_BOT_TOKEN
        # clickup -> CLICKUP_API_TOKEN
        
        for key in target_keys:
             # Sometimes keys in the secret might lower/upper case match?
             # Based on screenshot: NEON_ORG_ID is explicit.
             if key in data:
                 secret_values[key] = data[key]
             elif key == "SLACK_MAINTENANCE_BOT_TOKEN" and "SLACK_MAINTENANCE_BOT_TOKEN" in data:
                 # Check exact key from screenshot: Secret Key = "SLACK_MAINTENANCE_BOT_TOKEN"
                 secret_values[key] = data[key]
             elif key == "CLICKUP_API_TOKEN" and "CLICKUP_API_TOKEN" in data:
                 secret_values[key] = data[key]

    # 3. Create new settings with the overlaid secrets
    return Settings(**secret_values) 

settings = get_settings()
