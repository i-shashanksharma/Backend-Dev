import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { sanitizeText } from "../utils/sanitizer.js";

export const register = async (req, res) => {
  let { username, email, bio } = req.body;

  username = sanitizeText(username);
  bio = sanitizeText(bio);

  const password = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({ username, email, bio, password });

  res.json(user);
};