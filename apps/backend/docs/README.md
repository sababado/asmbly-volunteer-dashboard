# Backend Service Documentation

This service acts as the **"Translation Layer"** and **"Traffic Controller"** for the Asmbly Volunteer Dashboard. It is built with a **Serverless First** mindset using Python (FastAPI/Lambda) and Amazon DynamoDB.

## Architecture Principles

### 1. Clean Architecture
We adhere to the "Clean Code" approach to ensure the core business logic is independent of frameworks and external agencies.

*   **Entities:** Core business objects (e.g., `Task`, `Volunteer`, `Shop`).
*   **Use Cases:** Application business rules (e.g., `ClaimTask`, `SyncClickUpTask`).
*   **Adapters:** Interfaces for external services (e.g., `ClickUpAdapter`, `DynamoDBRepository`).
*   **Infrastructure:** Frameworks and drivers (e.g., FastAPI, `boto3`).

**Key takeaway:** We are swapping the **Persistence Layer** from SQL/RDS to DynamoDB. The internal Use Cases (e.g., `find_task_by_id`) remain unchanged; only the repository implementation changes.

### 2. API First
We define our API contract using OpenAPI 3.0 before implementation. The specification is located at:
`apps/backend/infra/openapi.yaml`

This ensures:
*   Frontend and Backend teams can work in parallel.
*   The API acts as a stable contract between the User Interface and the Backend.

### 3. Syncable Services ("The Sync Pattern")
The backend does **not** rely on a real-time connection to a SQL database for every read. Instead, it uses **DynamoDB** as a high-speed sync/cache layer.

**Data Flow:**
1.  **Source of Truth:** ClickUp (Tasks), Neon CRM (Users), Slack (Chat).
2.  **Ingest:** Webhooks trigger Lambda functions when data changes in the Source of Truth.
3.  **Process:** The backend normalizes the data into our Domain Entities.
4.  **Cache:** Data is saved to DynamoDB optimized for our Access Patterns.
5.  **Read:** The Frontend queries the API, which reads solely from DynamoDB (sub-millisecond latency).

## DynamoDB Design

We use a **Single Table Design** (or dedicated tables per entity depending on final implementation) managed via AWS SAM.

### Access Patterns
Below are the primary access patterns we support:

| Access Pattern | Key Condition | Notes |
| :--- | :--- | :--- |
| **Get Task by ID** | `PK=TASK#{id}` | Direct lookup. |
| **Get Tasks by Shop** | `GSI1PK=SHOP#{shop_id}` | Query GSI1 for filtering. |
| **Get Open Tasks** | `GSI2PK=STATUS#OPEN` | Query GSI2 for task feed. |

### Infrastructure as Code
All tables are defined in `apps/backend/infra/dynamodb.yaml` and referenced in the main `template.yaml`. No manual schema migrations are required—only table definitions.

## Syncable Service Adapters

Integration with external services is handled via modular adapters:

*   **ClickUp:** Handles webhook processing and API calls to update task status.
*   **Slack:** Sends notifications to specific channels based on shop area.
*   **Discourse:** Creates threads for major repairs.

## Implementation Details

*   **Framework:** FastAPI
*   **Infrastructure:** AWS SAM (`infra/` directory)
*   **Database:** DynamoDB (`infra/dynamodb.yaml`)
*   **API Spec:** OpenAPI (`infra/openapi.yaml`)

## Infrastructure & Deployment

We use a split-stack deployment to handle **Cross-Region Requirements** for custom domains.
The Stack itself lives in `us-east-2` (Ohio), but the CloudFront Certificate must be in `us-east-1` (N. Virginia).

### Deployment Workflow (voldash.asmbly.org)

1.  **Step 1: Deploy Certificates (us-east-1)**
    This stack creates the ACM Certificate in the required region.
    ```bash
    sam deploy -t infra/certs.yaml \
      --stack-name asmbly-backend-certs \
      --region us-east-1 \
      --parameter-overrides DomainName=voldash.asmbly.org AppEnv=dev \
      --resolve-s3
    ```
    *Action Required*: During deployment, go to the AWS Console -> ACM (us-east-1) and validate the certificate (e.g. click "Create records in Route 53").
    *Note the Output*: Copy the `CertificateArn` from the outputs.

2.  **Step 2: Deploy Main Stack (us-east-2)**
    This deploys the App, DB, and CloudFront distribution using the cert from Step 1.
    ```bash
    sam deploy -t template.yaml \
      --stack-name asmbly-backend-dev \
      --region us-east-2 \
      --parameter-overrides AppEnv=dev CertificateArn=<PASTE_ARN_HERE> \
      --resolve-s3 --capabilities CAPABILITY_IAM
    ```

3.  **Step 3: Point DNS**

### 4. CI/CD Setup (GitHub Actions)

To allow GitHub Actions to deploy to AWS, we use a dedicated OIDC Role.

**One-Time Setup:**
Deploy the OIDC stack to create the IAM Role:
```bash
sam deploy \
  --template-file apps/backend/template-cicd.yaml \
  --stack-name asmbly-volunteer-dashboard-cicd \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
  --region us-east-2 \
  --parameter-overrides GitHubOrg=sababado GitHubRepo=asmbly-volunteer-dashboard
```
*Note*: This creates the role `GitHub-OIDC-asmbly-volunteer-dashboard-deploy` which is referenced in `.github/workflows/frontend.yml`.
