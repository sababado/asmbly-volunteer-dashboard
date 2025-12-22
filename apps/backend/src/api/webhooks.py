from fastapi import APIRouter, HTTPException
from src.domain.schemas import ClickUpWebhookPayload
from src.services.clickup import process_webhook_payload
import logging
import json

router = APIRouter()
logger = logging.getLogger(__name__)


@router.post("/clickup", status_code=200)
async def clickup_webhook(payload: ClickUpWebhookPayload):
    """
    Endpoint to receive webhooks from ClickUp.
    """
    try:
        # Log summary for observability without dumping huge JSON
        task_ids = [t.id for t in payload.tasks] if payload.tasks else []
        logger.info(f"Received ClickUp webhook. EventID: {payload.webhook_id}, Tasks: {task_ids}")

        # Check for empty tasks (e.g. test events or unrelated updates)
        if not payload.tasks:
            logger.info("No tasks found in payload. Treating as test or irrelevant event.")
            return {"message": "Received, but no tasks to process", "processed_count": 0}

        results = process_webhook_payload(payload)
        return {"message": "Processed successfully", "processed_count": len(results)}

    except Exception as e:
        logger.error(f"Error processing webhook: {str(e)}")
        # Startups often want 200 even on error to prevent webhook retries
        # from the provider if it's a logic error.
        # But for development visibility, let's return 500 or 400 if
        # strictly necessary.
        # ClickUp will retry on 500. raising HTTPException will likely result
        # in 500 or 422.
        raise HTTPException(status_code=500, detail=str(e))
