import Message from "../models/Message.js";
import { sanitizeText } from "../utils/sanitizer.js";

export const sendMessage = async (req, res) => {
  const content = sanitizeText(req.body.content);

  const message = await Message.create({
    sender: req.session.user.id,
    receiver: req.body.receiver,
    content
  });

  res.json(message);
};

export const getMessages = async (req, res) => {
  const messages = await Message.find({
    $or: [
      { sender: req.session.user.id },
      { receiver: req.session.user.id }
    ]
  });

  res.json(messages);
};