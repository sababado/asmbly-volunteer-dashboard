from pydantic import BaseModel, Field, field_validator
from typing import Optional, List, Literal, Any, Dict

# --- Security & Base ---

class BaseSchema(BaseModel):
    """
    Base schema for all models to enforce security practices.
    Inherits Pydantic's default validation.
    """
    class Config:
        str_strip_whitespace = True
        extra = "ignore" # Ignore extra fields from external payloads by default

# --- ClickUp Webhook Payloads ---

class ClickUpCustomField(BaseSchema):
    id: str
    name: str
    type: str
    value: Optional[Any] = None
    type_config: Optional[Dict[str, Any]] = None

class ClickUpTask(BaseSchema):
    id: str
    name: str
    text_content: Optional[str] = None
    description: Optional[str] = None
    status: Dict[str, Any]
    date_created: str
    date_updated: str
    url: str
    custom_fields: List[ClickUpCustomField] = []

class ClickUpWebhookPayload(BaseSchema):
    """
    Represents the payload received from ClickUp webhooks.
    Ideally matches the structure containing 'tasks' or a single 'task'.
    """
    event: Optional[str] = None
    task_id: Optional[str] = None
    # For the 'task created/updated' events, ClickUp often sends the task data directly 
    # or inside a 'history_items' structure depending on webhook verification vs event.
    # Based on user context, we are parsing a "full problem report entry" which looks like a list of tasks.
    tasks: Optional[List[ClickUpTask]] = []

# --- Internal Domain Models ---

class ProblemReportBase(BaseSchema):
    title: str = Field(..., max_length=200)
    description: Optional[str] = Field(None, max_length=5000)
    area: str
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
    description: Optional[str] = Field(None, description="Detailed description")
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
