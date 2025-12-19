from src.core.config import settings

class NeonService:
    """
    Adapter for Neon CRM (future integration).
    Currently acts as a placeholder for validation logic.
    """
    def __init__(self):
        self.org_id = settings.NEON_ORG_ID
        self.api_key = settings.NEON_API_KEY

    def validate_volunteer(self, neon_id: str) -> bool:
        """
        Validates if a neon_id exists and is active.
        STUB: Returns True if configured.
        """
        if not self.api_key:
            return False
            
        # TODO: Implement actual API call to Neon
        return True

neon_service = NeonService()
