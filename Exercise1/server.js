import express from "express";
import userRouter from "./router/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
