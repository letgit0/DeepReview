import axios from "axios";

const REVIEW_API_URL = "http://localhost:3000/api/reviews";

export const createReview = async (code) => {
  const res = await axios.post(
    `${REVIEW_API_URL}/`,
    { code },
    { withCredentials: true }
  );

  return res.data;
};