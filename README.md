#  DeepReview — AI-Powered Engineering Feedback System

DeepReview is a full-stack AI system that transforms raw source code into a **structured engineering quality report** using LLM-driven analysis.

It evaluates code not just for correctness, but for **real-world engineering quality across readability, maintainability, security, and performance**, similar to a senior engineer performing a code review.

## Why DeepReview Exists

Most developer tools today (linters, formatters, static analyzers) answer:
>
> **“Does this code work?”**

DeepReview answers something deeper:
>
> **“Is this code actually good engineering?”**

---

## Output Model

Each analysis is generated under a **strictly enforced schema contract** to ensure consistent, deterministic, and frontend-safe AI outputs.

### Scoring Dimensions
- Score → overall quality indicator
- Readability → clarity, naming, and structure
- Maintainability → scalability and code organization
- Security → potential vulnerabilities and risky patterns
- Performance → efficiency and optimization quality
### Insight Sections
- Strengths → what is implemented well
- Weaknesses → issues detected in the code
- Suggestions → actionable improvements

---

##  System Architecture

```text
                User
                 │
                 ▼
     React Frontend (Vite + Tailwind)
   - Code input / file upload
   - Auth system + dashboard
   - History visualization
                 │
                 ▼
     Express.js Backend (REST API Layer)
   - JWT authentication
   - Request validation
   - AI processing layer
                 │
     ┌───────────┼───────────────┐
     ▼           ▼               ▼
 Groq LLM     MongoDB        JWT Auth
 (AI Engine)  (Database)     (Security)
     │
     ▼
Structured Code Intelligence Pipeline
```

---
## System Design Overview

DeepReview is built as a pipeline-based AI system:
```
Code Input
   ↓
Authentication Layer (JWT)
   ↓
AI Processing Layer
   ↓
Groq LLM (Structured Prompt Execution)
   ↓
Validated JSON Schema Output
   ↓
MongoDB Storage (per-user history)
   ↓
Frontend Dashboard Visualization
```
Key design principle:

The LLM is treated as a **controlled evaluation engine**, not a chatbot, using strict schema constraints to enforce consistent structured output.

---

##  Tech Stack

### Frontend

* React (v19)
* Vite
* Tailwind CSS
* React Router
* React Query
* Axios
* React Markdown

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Groq SDK (LLM integration)
* bcrypt.js
* dotenv
* cors

---

## Key Features

### 1. AI-Powered Code Review Engine

Uses LLM reasoning to analyze:

- Code structure
- Logical flow
- Design quality
- Security risks
- Performance inefficiencies

### 2. Multi-Dimensional Engineering Scoring

Each code sample is evaluated across:

- Readability (clarity, naming, structure)
- Maintainability (scalability, modularity)
- Security (vulnerability detection)
- Performance (algorithmic efficiency)
- Overall engineering score
### 3. Developer Progress Tracking System

- Stores every analysis per user
- Enables historical comparison
- Builds a timeline of engineering improvement
### 4. Secure Full-Stack Authentication

- JWT-based stateless authentication
- Password hashing with bcrypt
- Protected API routes
### 5. AI Response Schema Enforcement

Instead of free-form AI output, DeepReview enforces:

- strict JSON structure
- predictable fields
- frontend-safe rendering format

This ensures consistent and reliable structured output for frontend rendering.

## Engineering Highlights
This project demonstrates:

* LLM integration with **structured output control**
* Real-world implementation of AI-powered backend pipeline
* Clean separation of backend concerns (controllers/services/middleware)
* Stateless authentication architecture (JWT)
* Persistent user-level analytics system (MongoDB)
* Scalable design for future VS Code extension integration
* Frontend optimization using React Query caching

##  Project Structure

```text
DeepReview/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   └── config/
│
└── README.md
```

---

##  How It Works

```text
1. User submits code or uploads file
                │
                ▼
2. Frontend sends request to backend API
                │
                ▼
3. Backend validates user (JWT authentication)
                │
                ▼
4. Code is sent to Groq LLM for analysis
                │
                ▼
5. AI generates structured evaluation:
   - Quality scores
   - Strengths
   - Weaknesses
   - Suggestions
                │
                ▼
6. Result is stored in MongoDB per user
                │
                ▼
7. Frontend dashboard visualizes results & history
```

---
##  Use Cases

DeepReview is designed for:

* Improving coding practices through feedback loops
* Preparing for technical interviews
* Understanding real-world code quality standards
* Tracking personal engineering growth
* Learning maintainable software design patterns
* Building developer self-awareness through metrics

---
## Why This Project Matters

DeepReview demonstrates the ability to:

* Design AI-powered production systems
* Build full-stack applications with real-world architecture patterns
* Integrate LLMs into structured backend pipelines
* Store and analyze per-user behavioral data
* Think beyond CRUD → toward engineering intelligence systems
---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/letgit0/deepreview.git
cd deepreview
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GROQ_API_KEY=your_groq_api_key
NODE_ENV=
```

Run backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

##  Contributing

Contributions are welcome!

```bash
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request
```

---

##  License

MIT License

---

## ⭐ Final Takeaway

DeepReview is a developer intelligence system that converts code into structured, comparable engineering feedback using AI.

It bridges the gap between:

writing code → understanding code quality → improving engineering skill over time