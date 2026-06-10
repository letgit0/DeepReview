import { api } from "./api.js";
import { queryClient } from "../lib/queryClient.js";

// create review
export const createReview = async ({code, fileName}) => {
  const res = await api.post("/reviews", { code, fileName });
  queryClient.invalidateQueries(["reviews"]);
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

export const deleteReview = async (id) => {
  const res = await api.delete(`/reviews/${id}`);
  queryClient.invalidateQueries(["reviews"]);
  return res.data;
};