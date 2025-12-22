from fastapi import APIRouter
from src.services.dynamo import dynamo_service
from src.domain.schemas import ProblemReportResponse
from typing import List

router = APIRouter()

@router.get("/", response_model=List[ProblemReportResponse])
async def get_tasks():
    """
    Get all open tasks.
    """
    items = dynamo_service.get_open_tasks()
    return items
