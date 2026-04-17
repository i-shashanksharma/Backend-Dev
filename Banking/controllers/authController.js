import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utils/token.js";

const resetTokens = {};

export const register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 12);
  const user = await User.create({
    email: req.body.email,
    password: hash,
    balance: 0
  });
  res.json(user);
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.sendStatus(400);
  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.sendStatus(400);
  req.session.user = { id: user._id };
  res.sendStatus(200);
};

export const requestReset = (req, res) => {
  const token = generateToken();
  resetTokens[token] = { email: req.body.email, exp: Date.now() + 900000 };
  res.json({ token });
};

export const resetPassword = async (req, res) => {
  const data = resetTokens[req.body.token];
  if (!data || data.exp < Date.now()) return res.sendStatus(400);
  const hash = await bcrypt.hash(req.body.password, 12);
  await User.updateOne({ email: data.email }, { password: hash });
  delete resetTokens[req.body.token];
  res.sendStatus(200);
};