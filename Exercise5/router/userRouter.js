import express from "express";
import { searchBooks, getAllBooks } from "../controller/userController.js";

const router = express.Router();

router.get("/books", getAllBooks);
router.get("/books/search", searchBooks);

export default router;