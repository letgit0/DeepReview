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
      type: String, 
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);