import express from "express";
import { createPost } from "../controllers/postController.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", isAuth, createPost);

export default router;