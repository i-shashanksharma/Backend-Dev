import { orderQueue } from "../config/queue.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
  const { productId, qty } = req.body;

  const product = await Product.findById(productId);

  if (!product || product.stock < qty) {
    return res.status(400).send("Out of stock");
  }

  product.stock -= qty;
  await product.save();

  await orderQueue.add("order", req.body);

  res.json({ status: "queued" });
};