import mongoose from "mongoose";
import { logger } from "./logger.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info(`DB Connected (${process.env.NODE_ENV})`);
  } catch (err) {
    logger.error("DB Error");
    process.exit(1);
  }
};