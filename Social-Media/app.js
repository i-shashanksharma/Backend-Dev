import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";

import session from "./config/session.js";
import cors from "./config/cors.js";
import sanitize from "./middleware/sanitize.js";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors);
app.use(session);
app.use(sanitize);

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.use("/messages", messageRoutes);

export default app;