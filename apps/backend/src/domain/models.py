from dataclasses import dataclass
# from typing import Optional
from datetime import datetime


@dataclass
class TaskModel:
    """
    Internal representation of a Task, separate from the API Schema.
    Used for DynamoDB mapping.
    """
    pk: str  # Partition Key (e.g., TASK#123)
    sk: str  # Sort Key (e.g., METADATA)
    id: str
    title: str
    area: str
    status: str
    updated_at: datetime

    # ... other fields mapped from DynamoDB items
