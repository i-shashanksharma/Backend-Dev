import express from "express";
import { addReview } from "../controllers/reviewController.js";
import { isAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", isAuth, addReview);

export default router;