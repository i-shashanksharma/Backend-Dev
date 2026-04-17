import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 12);
  const user = await User.create({
    email: req.body.email,
    password: hash,
    role: req.body.role
  });
  res.json(user);
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.sendStatus(400);
  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.sendStatus(400);
  req.session.user = { id: user._id, role: user.role };
  res.sendStatus(200);
};