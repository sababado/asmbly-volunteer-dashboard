from fastapi import FastAPI

# from mangum import Mangum
from src.core.config import settings
from src.api import webhooks
from src.api.routes import tasks

app = FastAPI(
    title="Asmbly Volunteer Dashboard API",
    version="1.0.0",
    root_path=f"/{settings.APP_ENV}" if settings.APP_ENV else "",
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to Asmbly Volunteer Dashboard API",
        "env": settings.APP_ENV,
        "region": settings.AWS_REGION,
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


app.include_router(webhooks.router, prefix="/webhooks", tags=["webhooks"])
app.include_router(tasks.router, prefix="/tasks", tags=["tasks"])

# Mangum Adapter for AWS Lambda
