import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number
});

export default mongoose.model("Product", schema);