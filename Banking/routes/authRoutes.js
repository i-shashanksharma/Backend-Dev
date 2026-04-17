import express from "express";
import { register, login, requestReset, resetPassword } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginLimiter, login);
router.post("/reset-request", requestReset);
router.post("/reset", resetPassword);

export default router;