import express from "express";
import "./config/env.js";
import healthRoutes from "./routes/health.js";
import { metrics } from "./utils/metrics.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  metrics.totalRequests++;
  next();
});

app.use("/health", healthRoutes);

app.use((err, req, res, next) => {
  metrics.totalErrors++;
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;