# Volunteer Portal: Architecture & Billing Analysis

## 1. Executive Summary
**Project:** Volunteer Portal (Facilities Management)
**Goal:** Create a high-performance, gamified interface for volunteers to view and resolve facility issues, decoupled from ClickUp's API limitations.
**Core Pattern:** Event-Driven Sync (ClickUp -> DynamoDB -> Client).

---

## 2. Architecture Overview

This system uses a **"Cache-Aside / Materialized View"** strategy. ClickUp remains the Source of Truth (SoT) for task management, while DynamoDB acts as the high-speed read layer for the portal.

### The Data Flow

**1. Ingest (Write)**
* User (Reporter/Staff) creates a Task in ClickUp.
* ClickUp fires a Webhook (Task Created) to Lambda_Sync.

**2. Storage (State)**
* Lambda_Sync performs a `PutItem` operation into DynamoDB.
* DynamoDB Stream triggers Lambda_Reverse on updates.
* Lambda_Reverse pushes Status Updates back to ClickUp.

**3. Portal (Read/Interact)**
* DynamoDB serves Read data (JSON) to CloudFront.
* CloudFront serves content to the Volunteer User.
* Volunteer performs Claim/Fix actions (Gamification), which write back to DynamoDB.

### Component Roles

1.  **ClickUp (Source of Truth):**
    * Stores the official record of the problem.
    * Handles staff notifications and long-term history.
    * *Constraint:* High latency, strict rate limits.

2.  **DynamoDB (Speed Layer):**
    * Stores a "lightweight" mirror of open tickets.
    * Stores **Gamification Data** (Points, User Profiles, Badges) which does not exist in ClickUp.
    * *Benefit:* Sub-millisecond latency, infinite read scaling.

3.  **AWS Lambda (The Glue):**
    * **Ingest:** Listens for ClickUp Webhooks -> Updates DynamoDB.
    * **Gamify:** Calculates points when a task is marked "Fixed".
    * **Reverse Sync:** Pushes status updates from Portal back to ClickUp.

4.  **CloudFront (The Edge):**
    * Caches static frontend assets.
    * Caches "Open Reports" list for 60-120 seconds to minimize DB reads.

---

## 3. Database Schema (Single Table Design)

**Table Name:** VolunteerPortal_Main
**Billing Mode:** On-Demand (Pay-per-request)

* **Partition Key:** `PK`
* **Sort Key:** `SK`

### Data Models

**1. Problem Report (Mirror)**
* **PK:** `REPORT#<clickup_id>`
* **SK:** `METADATA`
* **Attributes:** Title, Status, Location, Points

**2. User Profile (Gamification)**
* **PK:** `USER#<user_id>`
* **SK:** `PROFILE`
* **Attributes:** Name, TotalPoints, Badges, Rank

**3. User Activity Log**
* **PK:** `USER#<user_id>`
* **SK:** `ACTION#<timestamp>`
* **Attributes:** ActionType, ReportID, PointsEarned

**4. Leaderboard**
* **PK:** `LEADERBOARD`
* **SK:** `CURRENT`
* **Attributes:** TopUsers (JSON List)

---

## 4. Billing & Scaling Analysis

**Verdict:** This architecture is projected to cost **$0.00/month** under current volume, with a realistic cap of **<$1.00/month** even at 100x growth.

### The Cost Breakdown (Current Volume)

**Assumption:** 3 reports/day, ~5 active daily volunteers, 100 interactions/day.

**Service: DynamoDB**
* **Tier:** Free Tier (25GB storage)
* **Usage Estimate:** < 10 MB total storage
* **Cost Impact:** $0.00

**Service: DynamoDB Writes**
* **Tier:** $1.25 / million writes
* **Usage Estimate:** ~200 writes/month
* **Cost Impact:** $0.00 (Fractional)

**Service: DynamoDB Reads**
* **Tier:** $0.25 / million reads
* **Usage Estimate:** ~5,000 reads/month
* **Cost Impact:** $0.00 (Fractional)

**Service: Lambda**
* **Tier:** Free Tier (400k GB-seconds)
* **Usage Estimate:** < 1% of free tier
* **Cost Impact:** $0.00

**Service: CloudFront**
* **Tier:** Free Tier (1TB Transfer)
* **Usage Estimate:** Text JSONs are negligible
* **Cost Impact:** $0.00

### What Forces an Upgrade? (The Danger Zones)

**1. Media Uploads**
* **Risk:** Storing or serving user-uploaded photos via DynamoDB/CloudFront directly.
* **Threshold:** Exceeding 1TB transfer (approx 200,000 high-res photos).
* **Mitigation:** Keep photos as links to ClickUp attachments.

**2. "Scan" Operations**
* **Risk:** Developer writes code that `Scans` the entire database on every page load instead of using `Query`.
* **Result:** Read costs scale linearly with database size, not traffic.
* **Mitigation:** Strict code review; disallow `Scan` in production.

**3. Infinite Loops**
* **Risk:** Lambda A updates DynamoDB -> Stream triggers Lambda A -> Repeat.
* **Result:** Millions of invocations in minutes.
* **Mitigation:** Set AWS Budget Alarm for **$1.00**.

### Scaling Projections

* **10x Volume (30 reports/day):** Still $0.00.
* **100x Volume (300 reports/day):** Still likely <$0.50/month due to On-Demand pricing efficiencies.
* **Viral Event (10,000 concurrent users):** System handles load gracefully; bill might reach $5.00 due to DynamoDB reads.

---

## 5. Next Steps

1.  **AWS Setup:** Create DynamoDB table `VolunteerPortal_Main` (PK: `PK`, SK: `SK`).
2.  **ClickUp Integration:** Configure Automation in ClickUp to fire webhook on "Task Created" in the Problem Reports list.
3.  **Safety:** Configure AWS Budget Alarm for **$1.00**.