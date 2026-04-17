import express from "express";
import { createAppointment } from "../controllers/appointmentController.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", isAuth, createAppointment);

export default router;