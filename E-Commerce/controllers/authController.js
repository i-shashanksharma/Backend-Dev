import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hash });

  res.json(user);
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send("Invalid credentials");
  }

  req.session.user = { id: user._id, role: user.role };
  res.send("Logged in");
};