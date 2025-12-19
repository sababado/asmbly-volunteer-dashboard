# Asmbly Volunteer Dashboard

## Overview

[Brief description of the project and its purpose.]

## Architecture

This project follows a "Clean Architecture" and "Serverless" approach.

*   **Frontend:** React (Vite) + Storybook (UI Kit).
*   **Backend:** Python (FastAPI/Lambda) + DynamoDB.
*   **Infrastructure:** AWS SAM (Serverless Application Model).

```
Asmbly Volunteer Dashboard/
├── apps/
│   ├── frontend/        # React Application ("The Experience")
│   └── backend/         # Serverless API ("The Engine")
├── packages/
│   └── ui-kit/          # Shared Design System ("The Look & Feel")
├── docs/                # Project Documentation
└── package.json         # Root Configuration
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- Python (v3.11+)
- AWS CLI & SAM CLI (for backend deployment/local testing)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sababado/asmbly-volunteer-dashboard
   cd Asmbly Volunteer Dashboard
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Backend:**
   ```bash
   cd apps/backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   # Ensure you have AWS credentials configured or use DynamoDB Local
   ```

### Development

- **Run All (Frontend + Storybook):**
  ```bash
  npm run dev
  ```
  This starts:
  - Frontend: http://localhost:5173
  - Storybook: http://localhost:6006

- **Run Backend:**
  ```bash
  cd apps/backend
  sam local start-api
  # OR directly with uvicorn if mocking AWS services
  uvicorn main:app --reload
  ```

## Documentation

- **[Agents & AI Context](Agents.md):** Guidelines for AI assistants.
- **[Contributing](CONTRIBUTING.md):** How to contribute to this project.
- **[Security](SECURITY.md):** Security protocols and validation.
- **[Versioning](VERSIONING.md):** Versioning strategy.

## License

[License Type]
