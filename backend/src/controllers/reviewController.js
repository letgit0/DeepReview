import Review from "../models/Review.js";
import { getResponseFromGroq } from "../services/ai.services.js";

export const createReview = async (req, res) => {
  const { code } = req.body;
  const aiResponse = await getResponseFromGroq(code);
    
  const review = await Review.create({
    userId: req.user._id,
    code,
    analysis: aiResponse,
  });

  res.json({ reviewId: review._id });
};

export const getReview = async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(review);
};

export const getUserReviews = async () => {

};

export const deleteReview = async () => {

};