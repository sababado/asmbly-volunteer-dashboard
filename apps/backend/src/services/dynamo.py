import boto3
import os
from src.core.config import settings

class DynamoService:
    def __init__(self):
        self.region = settings.AWS_REGION
        self.is_offline = os.getenv("IS_OFFLINE")
        
        if self.is_offline:
            self.dynamodb = boto3.resource(
                'dynamodb',
                region_name='localhost',
                endpoint_url='http://localhost:8000'
            )
        else:
             self.dynamodb = boto3.resource('dynamodb', region_name=self.region)
             
        # Table name logic (e.g., "asmbly-volunteer-dashboard-dev")
        # In a real app we might pass this from env vars
        app_name = "asmbly-volunteer-dashboard" 
        self.table_name = f"{app_name}-{settings.APP_ENV}"
        self.table = self.dynamodb.Table(self.table_name)

    def get_item(self, pk: str, sk: str):
        try:
            response = self.table.get_item(Key={'PK': pk, 'SK': sk})
            return response.get('Item')
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

dynamo_service = DynamoService()
