# DeepReview

DeepReview is an AI-powered code review tool that helps developers understand and improve their code using **Groq API**.

It focuses on learning, not just fixing code — acting like a patient programming teacher.

---

## ✨ Features

-  AI code review using Llama 3.1 8B Instant (Groq)
-  Beginner-friendly explanations
-  Complexity analysis (time & space)
-  Practical improvement suggestions
-  Interactive code editor with syntax highlighting
-  Markdown-formatted responses

---

## 🛠️ Tech Stack

**Frontend:** React (Vite), Tailwind CSS, Axios, React Markdown, PrismJS  
**Backend:** Node.js, Express.js, Groq SDK, dotenv, cors  

---

## ⚙️ How It Works

```text
User inputs code
      ↓
Frontend sends request to backend
      ↓
Backend sends prompt to Groq API (DeepSeek R1)
      ↓
AI returns:
  - Improved code
  - Explanation
  - Complexity analysis
  - Learning resources
      ↓
Frontend displays structured response

```
---
## 🚀 Future Improvements

-  User authentication (JWT)
-  Save past reviews (MongoDB integration)
-  GitHub repository code analysis
-  Code quality scoring system
-  Deploy frontend + backend (Vercel / Render)
-  Multi-file project support

---

## 📌 Use Cases

- Learn better coding practices  
- Prepare for technical interviews  
- Debug and optimize code  
- Understand time complexity  
- Improve code readability  

---

## 🤝 Contributing

Contributions are welcome!

```bash
1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request
```