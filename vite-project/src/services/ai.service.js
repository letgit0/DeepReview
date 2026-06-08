import axios from "axios";

export async function reviewCode(code) {
  const response = await axios.post(
    "http://localhost:3000/api/ai/generate",
    { code }
  );

  return response.data;
}