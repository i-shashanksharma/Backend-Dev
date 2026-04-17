import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { helmetConfig } from "./config/helmet.js";
import { sessionConfig } from "./config/session.js";
import { sanitize } from "./middleware/sanitizeMiddleware.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.use(helmetConfig);
app.use(sessionConfig);
app.use(sanitize);

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/reviews", reviewRoutes);

export default app;