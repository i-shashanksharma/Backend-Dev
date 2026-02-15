import express from "express";
import { getAllBooks } from "../controller/userController.js";
import { validateYear } from "../middleware/validateYear.js";

const router = express.Router();

router.get("/books", validateYear, getAllBooks);

export default router;
