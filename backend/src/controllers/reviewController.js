import Review from "../models/review.js";
import { getResponseFromGroq } from "../services/ai.services.js";
import mongoose from "mongoose";

export const createReview = async (req, res) => {
  try {
    const { code, fileName } = req.body;

    if (!code || code.trim().length < 10) {
      return res.status(400).json({ message: "Code too short" });
    }

    const aiResponse = await getResponseFromGroq(code);

    let parsedResponse;

    try {
      parsedResponse = JSON.parse(aiResponse);
    } catch (err) {
      // fallback: try extracting JSON
      const match = aiResponse.match(/\{[\s\S]*\}/);

      if (match) {
        try {
          parsedResponse = JSON.parse(match[0]);
        } catch {
          return res.status(500).json({
            message: "AI returned invalid JSON",
            raw: aiResponse,
          });
        }
      } else {
        return res.status(500).json({
          message: "AI response is not JSON",
          raw: aiResponse,
        });
      }
    }

    if (parsedResponse?.error) {
      return res.status(400).json({
        message: parsedResponse.error,
      });
    }

    const review = await Review.create({
      userId: req.user._id,
      code,
      fileName,
      analysis: parsedResponse,
    });

    return res.json({ reviewId: review._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getReview = async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(review);
};

export const getUserReviews = async (req, res) => {
  const allReviews = await Review.find(
    { userId: new mongoose.Types.ObjectId(req.user._id) },
    { "analysis.score": 1, _id: 1, fileName: 1, createdAt: 1 },
  ).sort({ createdAt: -1 });

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
