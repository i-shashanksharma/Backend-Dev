import helmet from "helmet";

export default helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
      imgSrc: ["'self'"]
    }
  }
});