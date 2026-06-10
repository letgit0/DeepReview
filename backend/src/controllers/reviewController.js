import Review from "../models/Review.js";
import { getResponseFromGroq } from "../services/ai.services.js";
import mongoose from "mongoose";

export const createReview = async (req, res) => {
  const { code, fileName } = req.body;

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
    fileName,
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

export const getUserReviews = async (req, res) => {

  const allReviews = await Review.find({ userId: new mongoose.Types.ObjectId(req.user._id) }, { "analysis.score": 1, _id: 1, fileName: 1, createdAt: 1}).sort({ createdAt: -1 });

  if (!allReviews) {
    return res.status(404).json({ message: "No Reviews yet" });
  }

  res.json(allReviews);

};

export const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);

    if (!deletedReview) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json({
      message: "Review deleted successfully",
      review: deletedReview,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};