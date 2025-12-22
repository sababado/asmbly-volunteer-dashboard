import json
import logging
from typing import Dict, Any
from pathlib import Path

from src.domain.schemas import ClickUpWebhookPayload
from src.core.config import get_settings

logger = logging.getLogger(__name__)


class ClickUpService:
    def __init__(self):
        self.token = get_settings().CLICKUP_API_TOKEN
        self.config = self._load_config()
        # Cache for field definitions: {list_id: {field_id: field_definition}}
        self.field_definitions_cache = {}

    def _load_config(self) -> Dict[str, Any]:
        """Loads the ClickUp configuration from the JSON file."""
        try:
            current_file_path = Path(__file__).resolve()
            # apps/backend/src/services/clickup.py ->
            # apps/backend/configs/clickup_config.json
            config_path = (
                current_file_path.parent.parent.parent
                / "configs"
                / "clickup_config.json"
            )

            if not config_path.exists():
                logger.warning(f"Config file not found at {config_path}")
                return {}

            with open(config_path, "r") as f:
                return json.load(f)
        except Exception as e:
            logger.error(f"Failed to load ClickUp config: {e}")
            return {}

    def get_list_field_defs(self, list_id: str) -> Dict[str, Any]:
        """
        Fetches custom fields for a list from ClickUp API and caches them.
        Returns a dict mapped by field_id.
        """
        if list_id in self.field_definitions_cache:
            return self.field_definitions_cache[list_id]

        import requests

        url = f"https://api.clickup.com/api/v2/list/{list_id}/field"
        headers = {"Authorization": self.token}

        try:
            resp = requests.get(url, headers=headers, timeout=10)
            if resp.status_code == 200:
                data = resp.json()
                fields = data.get("fields", [])
                # Map by ID
                field_map = {f["id"]: f for f in fields}
                self.field_definitions_cache[list_id] = field_map
                return field_map
            else:
                logger.error(f"Failed to fetch fields for list {list_id}: {resp.text}")
                return {}
        except Exception as e:
            logger.error(f"Error fetching fields for list {list_id}: {e}")
            return {}

    def extract_custom_field_value(
        self, field: Any, field_def: Dict[str, Any] = None
    ) -> Any:
        """
        Helper to extract the actual value from a ClickUp Custom Field.
        Uses the fetched field definition to resolve Option UUIDs to names.
        """
        value = getattr(field, "value", None)
        if value is None:
            return None

        # field.type is an INT in the webhook schema
        # (e.g. 1 for Dropdown, 0 for URL/Text).
        # But we verify against the API definition "type" string if available.

        def_type = field_def.get("type") if field_def else None

        # DROPDOWN (type 1 usually, or "drop_down" string in API def)
        if def_type == "drop_down" or getattr(field, "type", None) == 1:
            # Value is likely an Option UUID (string) or Index (int)
            # The API definition contains "type_config" -> "options"
            # -> [{"id": "UUID", "name": "Name"}]
            if field_def and "type_config" in field_def:
                options = field_def["type_config"].get("options", [])
                for opt in options:
                    # Match by ID (UUID) or OrderIndex
                    if opt.get("id") == value or opt.get("orderindex") == value:
                        return opt.get("name")

            return str(value)

        # URL (type 0 usually) or just text
        # If value is a dict with 'url', extract it.
        if isinstance(value, dict) and "url" in value:
            return value.get("url")

        return value

    def process_webhook_payload(self, payload: ClickUpWebhookPayload):
        """
        Processes the webhook payload (Single Task) and saves to DynamoDB.
        """
        config = self.config.get("lists")
        if not config or not payload.payload:
            # If no payload.payload, it might be a verification event or empty
            return []

        task = payload.payload
        processed_items = []

        from src.services.dynamo import dynamo_service
        from src.domain.schemas import ProblemReportCreate
        import datetime

        # Iterate configs to find which list this task might belong to.
        # The payload contains "lists": [{"list_id": "901310067725", "type": "home"}]
        # We can check that later if needed.

        for list_id, list_config in config.items():
            # Optimization: if we could check list_id from payload, we would.

            field_def_map = self.get_list_field_defs(list_id)
            field_map = list_config.get("field_map", {})

            # Map Custom Fields
            # task.custom_fields is List[ClickUpCustomField]
            custom_fields_map = {f.id: f for f in task.custom_fields}

            def get_mapped_value(config_key):
                field_id = field_map.get(config_key)
                if not field_id or field_id not in custom_fields_map:
                    return None

                f = custom_fields_map[field_id]
                f_def = field_def_map.get(field_id)
                return self.extract_custom_field_value(f, f_def)

            try:
                # Check for required fields to "qualify" this task for config
                # E.g. if 'workspace' is required and missing...

                logger.info(f"Attempting to map Task {task.id} using Config {list_id}")

                workspace_val = get_mapped_value("workspace") or "General"
                
                t_stat = task.status
                status_str = t_stat if isinstance(t_stat, str) else str(t_stat)

                report_data = ProblemReportCreate(
                    title=task.title,
                    description=task.description or "",
                    workspace=workspace_val,
                    problem_type=get_mapped_value("problem_type"),
                    status=status_str,
                    urgency="medium",
                    contact_details=get_mapped_value("contact_details"),
                    discourse_post_link=(get_mapped_value("discourse_post_link")),
                    slack_post_link=get_mapped_value("slack_post_link"),
                    clickup_task_id=task.id,
                )

                item = report_data.model_dump()
                item["PK"] = f"PROBLEM_REPORT#{task.id}"
                item["SK"] = "METADATA"
                item["created_at"] = datetime.datetime.now().isoformat()
                
                logger.info(f"Successfully mapped Task {task.id} to ProblemReport. Saving to DynamoDB...")

                saved = dynamo_service.put_item(item)
                if saved:
                    processed_items.append(task.id)
                    logger.info(f"Saved ProblemReport {task.id} to DynamoDB")
                else:
                    logger.error(f"Failed to save ProblemReport {task.id} to DynamoDB")

                # If success, break loop
                break

            except Exception as e:
                # If mapping failed, continue to next config
                logger.debug(f"Skipping config {list_id} for task {task.id}: {e}")
                continue

        return processed_items


clickup_service = ClickUpService()


def process_webhook_payload(payload: ClickUpWebhookPayload):
    return clickup_service.process_webhook_payload(payload)
