import express from "express";
import authorRouter from "./router/authorRouter.js";

const app = express();

app.use(express.json());

app.use("/api", authorRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
