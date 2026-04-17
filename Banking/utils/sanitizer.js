import sanitizeHtml from "sanitize-html";

export const clean = (input) => {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {}
  });
};