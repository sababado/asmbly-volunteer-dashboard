import httpx
from src.core.config import settings


class SlackService:
    BASE_URL = "https://slack.com/api"

    def __init__(self):
        self.token = settings.SLACK_MAINTENANCE_BOT_TOKEN

    def get_headers(self):
        return {
            "Authorization": f"Bearer {self.token}",
            "Content-Type": "application/json",
        }

    async def send_notification(self, channel: str, text: str):
        """
        Sends a message to a Slack channel.
        """
        if not self.token:
            print("Warning: No Slack Token. Skipping Notification.")
            return

        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    f"{self.BASE_URL}/chat.postMessage",
                    headers=self.get_headers(),
                    json={"channel": channel, "text": text},
                )
                response.raise_for_status()
            except Exception as e:
                print(f"Failed to send Slack message: {e}")


slack_service = SlackService()
