import helmet from "helmet";

export default helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://secure-medical-cdn.com"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"]
    }
  }
});