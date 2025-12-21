
import sys
import os
from unittest.mock import MagicMock, patch

# Add src to path
sys.path.append(os.path.join(os.path.dirname(__file__), ".."))

from src.domain.schemas import ClickUpWebhookPayload

def test_process_payload_v2():
    print("\nTesting process_webhook_payload (V2 - Single Task & API Mock)...")

    # Mock DynamoService
    with patch("src.services.dynamo.dynamo_service") as mock_dynamo, \
         patch("requests.get") as mock_get:
        
        mock_dynamo.put_item.return_value = True

        # Mock field definitions response from ClickUp API
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {
            "fields": [
                {
                    "id": "34389c82-a2cf-423f-ace3-8d352a771f09", # Problem Type
                    "type": "drop_down",
                    "type_config": {
                        "options": [
                            {"id": "b6333e48-d86d-4bb4-8b78-68a5652ebdb3", "name": "Other"}
                        ]
                    }
                },
                {
                    "id": "f4923783-74db-42ca-bda3-82bbca58abfe", # Workspace
                    "type": "drop_down",
                    "type_config": {
                        "options": [
                            {"id": "38635fa3-e55e-492e-9373-79bb719d8e31", "name": "Office"}
                        ]
                    }
                }
            ]
        }

        from src.services.clickup import process_webhook_payload

        # REAL Payload from User Prompt
        payload_data = {
          "trigger_id": "44fb4f53-e7c0-427d-815b-26e093eb9255",
          "payload": {
            "id": "86ae2bnzv",
            "name": "Test Report",
            "status": "open",
            "date_updated": "1766355772556",
            "url": "https://app.clickup.com/t/86ae2bnzv",
            "fields": [
              {
                "field_id": "2683fe02-e756-4bd1-9735-fe9b6d478714",
                "value": "https://yo.asmbly.org",
                "type": 0
              },
              {
                "field_id": "34389c82-a2cf-423f-ace3-8d352a771f09",
                "value": "b6333e48-d86d-4bb4-8b78-68a5652ebdb3", # Matches 'Other' UUID
                "type": 1
              },
              {
                "field_id": "f4923783-74db-42ca-bda3-82bbca58abfe",
                "value": "38635fa3-e55e-492e-9373-79bb719d8e31", # Matches 'Office' UUID
                "type": 1
              }
            ],
            "lists": [
              {
                "list_id": "901310067725",
                "type": "home"
              }
            ]
          }
        }

        # Run
        # Note: The schema expects 'fields' -> aliased to 'custom_fields'
        # Pydantic should handle the alias if we pass 'fields' in the dict.
        
        # However, to be safe with model initialization from dict:
        # payload = ClickUpWebhookPayload(**payload_data)
        # This works if Config.populate_by_name or alias is set up correctly.
        # Our Schema uses Field(..., alias="fields"). 
        
        payload = ClickUpWebhookPayload.model_validate(payload_data)
        result = process_webhook_payload(payload)

        # Assert
        print(f"Result: {result}")
        
        if "86ae2bnzv" in result:
             print("SUCCESS: Task processed.")
        else:
             print("FAILURE: Task not returned.")

        # Check DynamoDB call
        if mock_dynamo.put_item.called:
            args = mock_dynamo.put_item.call_args[1] or mock_dynamo.put_item.call_args[0][0]
            item = args.get("Item") or args
            print(f"DynamoDB Put Item: {item}")
            
            assert item['PK'] == "PROBLEM_REPORT#86ae2bnzv"
            assert item['title'] == "Test Report"
            assert item['problem_type'] == "Other" # Mapped from UUID!
            assert item['workspace'] == "Office"   # Mapped from UUID!
            print("SUCCESS: DynamoDB item matches expected values and MAPPED UUIDs.")
        else:
            print("FAILURE: DynamoDB put_item not called.")


if __name__ == "__main__":
    try:
        test_process_payload_v2()
    except Exception as e:
        print(f"An error occurred: {e}")
        import traceback
        traceback.print_exc()
