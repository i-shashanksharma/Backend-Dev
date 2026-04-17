import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5
});

export const quizLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20
});

export const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100
});