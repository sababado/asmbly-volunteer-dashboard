import httpx
import json
import logging
import os
from typing import List, Optional, Dict, Any
from pathlib import Path

from src.domain.schemas import ClickUpWebhookPayload, ProblemReportCreate, ClickUpTask
from src.core.config import get_settings

logger = logging.getLogger(__name__)

class ClickUpService:
    def __init__(self):
        self.token = get_settings().CLICKUP_API_TOKEN
        self.config = self._load_config()
    
    def _load_config(self) -> Dict[str, Any]:
        """Loads the ClickUp configuration from the JSON file."""
        try:
            current_file_path = Path(__file__).resolve()
            # apps/backend/src/services/clickup.py -> apps/backend/configs/clickup_config.json
            config_path = current_file_path.parent.parent.parent / "configs" / "clickup_config.json"
            
            if not config_path.exists():
                logger.warning(f"Config file not found at {config_path}")
                return {}
                
            with open(config_path, "r") as f:
                return json.load(f)
        except Exception as e:
            logger.error(f"Failed to load ClickUp config: {e}")
            return {}

    def process_webhook_payload(self, payload: ClickUpWebhookPayload):
        raise NotImplementedError("process_webhook_payload not implemented")

clickup_service = ClickUpService()

def process_webhook_payload(payload: ClickUpWebhookPayload):
    return clickup_service.process_webhook_payload(payload)
