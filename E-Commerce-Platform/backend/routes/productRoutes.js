import express from "express";
import { getProducts } from "../controllers/productController.js";
import { cache } from "../middleware/cache.js";

const router = express.Router();

router.get("/", cache, getProducts);

export default router;