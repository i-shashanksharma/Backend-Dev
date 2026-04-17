import Post from "../models/Post.js";
import { sanitizePost } from "../utils/sanitizer.js";

export const createPost = async (req, res) => {
  const cleanContent = sanitizePost(req.body.content);

  const post = await Post.create({
    user: req.session.user.id,
    content: cleanContent
  });

  res.json(post);
};