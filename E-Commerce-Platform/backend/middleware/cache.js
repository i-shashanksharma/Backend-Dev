import { redis } from "../config/redis.js";

export const cache = async (req, res, next) => {
  const key = req.originalUrl;
  const cached = await redis.get(key);

  if (cached) {
    return res.json(JSON.parse(cached));
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    redis.setex(key, 60, JSON.stringify(body));
    res.sendResponse(body);
  };

  next();
};