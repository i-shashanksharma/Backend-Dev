import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: String,
  password: String,
  balance: Number
});

export default mongoose.model("User", schema);