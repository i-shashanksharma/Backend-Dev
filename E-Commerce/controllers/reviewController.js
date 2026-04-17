import sanitizeHtml from "sanitize-html";
import Review from "../models/Review.js";

export const addReview = async (req, res) => {
  const clean = sanitizeHtml(req.body.content, {
    allowedTags: [],
    allowedAttributes: {}
  });

  const review = await Review.create({
    user: req.session.user.id,
    content: clean
  });

  res.json(review);
};