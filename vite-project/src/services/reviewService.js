import { api } from "./api.js";

// create review
export const createReview = async (code) => {
  const res = await api.post("/reviews", { code });
  return res.data;
};

// get single review
export const getReview = async (id) => {
  const res = await api.get(`/reviews/${id}`);
  return res.data;
};

// get all user reviews
export const getAllReviews = async () => {
  const res = await api.get("/reviews/user");
  return res.data;
};
