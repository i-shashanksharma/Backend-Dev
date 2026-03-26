import express from "express";
import { signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup",signup);

export default router;



// user create
// hashes the password
// hashed the password using mongoose middleware