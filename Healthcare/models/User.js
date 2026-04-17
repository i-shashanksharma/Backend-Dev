import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: String,
  password: String,
  role: String
});

export default mongoose.model("User", schema);