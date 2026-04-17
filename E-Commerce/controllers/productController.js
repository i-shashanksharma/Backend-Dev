import Product from "../models/Product.js";

export const searchProducts = async (req, res) => {
  let q = req.query.q || "";

  q = q.replace(/[$.]/g, ""); // prevent injection

  const products = await Product.find({
    name: { $regex: q, $options: "i" }
  });

  res.json(products);
};