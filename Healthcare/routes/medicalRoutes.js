import express from "express";
import { createRecord, getRecords } from "../controllers/medicalController.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", isAuth, createRecord);
router.get("/", isAuth, getRecords);

export default router;