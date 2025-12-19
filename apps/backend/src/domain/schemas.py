from pydantic import BaseModel, Field
from typing import Optional, List, Literal

# --- Task Schemas ---

class TaskBase(BaseModel):
    title: str = Field(..., description="Task title")
    description: Optional[str] = Field(None, description="Detailed description")
    area: str = Field(..., description="Shop area (wood, metal, etc)")
    urgency: Literal["low", "medium", "high", "critical"] = "medium"
    status: str = "open"

class TaskCreate(TaskBase):
    pass

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    status: Optional[str] = None
    urgency: Optional[str] = None

class TaskResponse(TaskBase):
    id: str
    clickup_id: Optional[str] = None
    created_at: Optional[str] = None

# --- Volunteer/User Schemas ---

class UserBase(BaseModel):
    email: str
    name: str

class UserResponse(UserBase):
    neon_id: str
