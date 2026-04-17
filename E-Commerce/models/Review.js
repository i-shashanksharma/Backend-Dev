import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: String,
  content: String
});

export default mongoose.model("Review", reviewSchema);