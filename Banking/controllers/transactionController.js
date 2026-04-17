import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import { clean } from "../utils/sanitizer.js";

export const transfer = async (req, res) => {
  const { to, amount, description } = req.body;

  if (amount <= 0 || amount > 10000) return res.sendStatus(400);

  const sender = await User.findById(req.session.user.id);
  if (sender.balance < amount) return res.sendStatus(400);

  const receiver = await User.findById(to);
  if (!receiver) return res.sendStatus(400);

  sender.balance -= amount;
  receiver.balance += amount;

  await sender.save();
  await receiver.save();

  const tx = await Transaction.create({
    from: sender._id,
    to: receiver._id,
    amount,
    description: clean(description),
    createdAt: new Date()
  });

  res.json(tx);
};

export const history = async (req, res) => {
  const tx = await Transaction.find({
    $or: [
      { from: req.session.user.id },
      { to: req.session.user.id }
    ]
  });
  res.json(tx);
};