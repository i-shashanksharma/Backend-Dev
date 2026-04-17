import sanitizeHtml from "sanitize-html";

export const sanitizeCourse = (input) => {
  return sanitizeHtml(input, {
    allowedTags: ["b", "i", "em", "strong", "p", "ul", "li", "a"],
    allowedAttributes: {
      a: ["href"]
    }
  });
};

export const sanitizeText = (input) => {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {}
  });
};