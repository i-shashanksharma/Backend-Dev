import helmet from "helmet";

export const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://cdn.example.com"],
      scriptSrc: ["'self'", "https://www.youtube.com"],
      frameSrc: ["https://www.youtube.com"],
      connectSrc: ["'self'", "https://api.stripe.com"]
    }
  }
});