import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import helmet from "./config/helmet.js";
import session from "./config/session.js";
import sanitize from "./middleware/sanitize.js";

import authRoutes from "./routes/authRoutes.js";
import medicalRoutes from "./routes/medicalRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet);
app.use(session);
app.use(sanitize);

app.use("/auth", authRoutes);
app.use("/medical", medicalRoutes);
app.use("/appointments", appointmentRoutes);

export default app;