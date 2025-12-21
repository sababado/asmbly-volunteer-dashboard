
from fastapi import Security
from fastapi.security.api_key import APIKeyHeader
from src.core.config import settings

api_key_header = APIKeyHeader(name="X-API-Key", auto_error=False)


async def get_api_key(api_key_header: str = Security(api_key_header)):
    """
    Validates the API Key provided in the header.
    This is a stub for initial security.
    In the future, this might validate against Neon CRM or JWTs.
    """
    if not api_key_header:
        # For development/MVP we might allow unauthenticated or have a
        # simple master key
        # For now, let's just check if one is present if we want to enforce it.
        # Returning None allows endpoints to decide if they need it.
        return None

    # Example check (replace with real logic)
    if api_key_header == settings.NEON_API_KEY:
        return api_key_header

    # If using a separate frontend key, check that here.

    return api_key_header

# Stub for extracting user user from token


def get_current_user():
    return {"username": "volunteer_stub", "role": "maker"}
