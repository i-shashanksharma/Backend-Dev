import sanitizeHtml from "sanitize-html";

export const sanitizeText = (input) => {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {}
  });
};

// Allow safe HTML for posts
export const sanitizePost = (input) => {
  return sanitizeHtml(input, {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href"]
    },
    allowedSchemes: ["http", "https"]
  });
};