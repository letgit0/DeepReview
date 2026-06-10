import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    code: {
      type: String,
      required: true,
    },

    analysis: {
      score: Number,
      readability: Number,
      maintainability: Number,
      security: Number,
      performance: Number,
      strengths: [String],
      weaknesses: [String],
      suggestions: [String],
    },
    fileName: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);