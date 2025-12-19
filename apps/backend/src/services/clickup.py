import httpx
from src.core.config import settings

class ClickUpService:
    BASE_URL = "https://api.clickup.com/api/v2"

    def __init__(self):
        self.token = settings.CLICKUP_API_TOKEN

    def get_headers(self):
        return {
            "Authorization": self.token,
            "Content-Type": "application/json"
        }

    async def create_task(self, list_id: str, data: dict):
        """
        Creates a new task in ClickUp.
        """
        if not self.token:
             print("Warning: No ClickUp Token. Skipping Sync.")
             return {"id": "mock_clickup_id"}

        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{self.BASE_URL}/list/{list_id}/task",
                headers=self.get_headers(),
                json=data
            )
            response.raise_for_status()
            return response.json()

clickup_service = ClickUpService()
