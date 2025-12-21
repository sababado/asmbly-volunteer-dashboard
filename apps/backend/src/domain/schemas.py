from pydantic import BaseModel, Field
from typing import Optional, List, Literal, Any, Dict

# --- Security & Base ---


class BaseSchema(BaseModel):
    """
    Base schema for all models to enforce security practices.
    Inherits Pydantic's default validation.
    """
    class Config:
        str_strip_whitespace = True
        # Ignore extra fields from external payloads by default
        extra = "ignore"

# --- ClickUp Webhook Payloads ---



class ClickUpCustomField(BaseSchema):
    id: str = Field(..., alias="field_id")
    value: Optional[Any] = None
    # In the new payload, 'type' is an int (e.g. 0, 1), not a string
    type: Optional[int] = None


class ClickUpTask(BaseSchema):
    id: str
    title: str = Field(..., alias="name")  # e.g. "Broken Laser", "Orientation Help"
    description: str | None = Field(None, alias="text_content") # "text_content" usually holds description text
    status: str = "open"  # open, in_progress, resolved, closed
    date_updated: str
    url: str
    custom_fields: List[ClickUpCustomField] = Field(..., alias="fields")


class ClickUpWebhookPayload(BaseSchema):
    """
    Represents the payload received from ClickUp webhooks.
    """
    event: Optional[str] = None
    trigger_id: Optional[str] = None
    payload: Optional[ClickUpTask] = None

# --- Internal Domain Models ---


class ProblemReportBase(BaseSchema):
    title: str = Field(..., max_length=200)
    description: Optional[str] = Field(None, max_length=5000)
    workspace: str
    problem_type: Optional[str] = None
    urgency: Literal["low", "medium", "high", "critical"] = "medium"
    status: str = "open"

    # Mapped from Custom Fields
    contact_details: Optional[str] = None
    discourse_post_link: Optional[str] = None
    slack_post_link: Optional[str] = None


class ProblemReportCreate(ProblemReportBase):
    clickup_task_id: str


class ProblemReportResponse(ProblemReportBase):
    id: str
    clickup_task_id: str
    clickup_url: Optional[str] = None
    created_at: str

# --- Task Schemas (Legacy/Stub) ---


class TaskBase(BaseSchema):
    title: str = Field(..., description="Task title")
    description: Optional[str] = Field(
        None, description="Detailed description")
    area: str = Field(..., description="Shop area (wood, metal, etc)")
    urgency: Literal["low", "medium", "high", "critical"] = "medium"
    status: str = "open"


class TaskCreate(TaskBase):
    pass


class TaskUpdate(BaseSchema):
    title: Optional[str] = None
    status: Optional[str] = None
    urgency: Optional[str] = None


class TaskResponse(TaskBase):
    id: str
    clickup_id: Optional[str] = None
    created_at: Optional[str] = None

# --- Volunteer/User Schemas ---


class UserBase(BaseSchema):
    email: str
    name: str


class UserResponse(UserBase):
    neon_id: str
