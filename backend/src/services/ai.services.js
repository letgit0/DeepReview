import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from '../prompt.js';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function getResponseFromGroq(query) {
  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT
      },
      {
        role: "user",
        content: query
      },  
    ],
  });
  return response.choices[0].message.content;
}
