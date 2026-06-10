import Review from "../models/Review.js";
import { getResponseFromGroq } from "../services/ai.services.js";

export const createReview = async (req, res) => {
  const { code } = req.body;

  if (!code || code.trim().length < 10) {
    return res.status(400).json({
      message: "Code too short"
    });
  }
  const aiResponse = await getResponseFromGroq(code);
  const parsedResponse = JSON.parse(aiResponse);

  if (parsedResponse.error) {
    return res.status(400).json({
      message: parsedResponse.error
    });
  }

  const review = await Review.create({
    userId: req.user._id,
    code,
    analysis: parsedResponse,
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