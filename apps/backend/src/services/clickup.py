import httpx
import json
import logging
from typing import List, Optional, Dict, Any
from pathlib import Path

from src.domain.schemas import ClickUpWebhookPayload, ProblemReportCreate, ClickUpTask
from src.core.config import get_settings

logger = logging.getLogger(__name__)

class ClickUpService:
    def __init__(self):
        self.token = get_settings().CLICKUP_API_TOKEN
        self.config = self._load_config()
            return response.json()

clickup_service = ClickUpService()
