import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/register", (_req, res) => {
  res.status(405).json({ msg: "Use POST /api/auth/register with JSON body to register." });
});

router.get("/login", (_req, res) => {
  res.status(405).json({ msg: "Use POST /api/auth/login with JSON body to log in." });
});

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ msg: "Protected data", user: req.user });
});

export default router;