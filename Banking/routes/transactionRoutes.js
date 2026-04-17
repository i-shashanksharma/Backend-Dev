import express from "express";
import { transfer, history } from "../controllers/transactionController.js";
import { isAuth } from "../middleware/auth.js";
import { transferLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/transfer", isAuth, transferLimiter, transfer);
router.get("/history", isAuth, history);

export default router;