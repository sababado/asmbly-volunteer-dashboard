import boto3
import os
from src.core.config import settings


class DynamoService:
    def __init__(self):
        self.region = settings.AWS_REGION
        self.is_offline = os.getenv("IS_OFFLINE")

        if self.is_offline:
            self.dynamodb = boto3.resource(
                "dynamodb",
                region_name="localhost",
                endpoint_url="http://localhost:8000",
            )
        else:
            self.dynamodb = boto3.resource("dynamodb", region_name=self.region)

        # Table name logic
        # 1. Prefer explicit env var (passed from CloudFormation)
        # 2. Fallback to constructing it (e.g. for local offline or legacy)
        self.table_name = os.getenv("TABLE_NAME")
        
        if not self.table_name:
             app_name = "asmbly-volunteer-dashboard"
             self.table_name = f"{app_name}-{settings.APP_ENV}"
        
        print(f"DynamoService using table: {self.table_name}")
        self.table = self.dynamodb.Table(self.table_name)

    def get_item(self, pk: str, sk: str):
        try:
            response = self.table.get_item(Key={"PK": pk, "SK": sk})
            return response.get("Item")
        except Exception as e:
            print(f"DynamoDB Get Error: {e}")
            return None

    def put_item(self, item: dict):
        try:
            self.table.put_item(Item=item)
            return True
        except Exception as e:
            print(f"DynamoDB Put Error: {e}")
            return False

    def get_open_tasks(self):
        """
        Queries the StatusIndex for all tasks where status = 'open'.
        STRICTLY uses Query, never Scan.
        """
        try:
            from boto3.dynamodb.conditions import Key

            # Query GSI: status = 'open'
            # We sort by created_at (SK of the GSI) descending if we want latest first,
            # or ascending (ScanIndexForward=True) depending on needs.
            # Defaulting to ScanIndexForward=False (Newest first)
            response = self.table.query(
                IndexName="StatusIndex",
                KeyConditionExpression=Key("status").eq("open"),
                ScanIndexForward=False,
            )
            return response.get("Items", [])
        except Exception as e:
            print(f"DynamoDB Query Error: {e}")
            return []


dynamo_service = DynamoService()
