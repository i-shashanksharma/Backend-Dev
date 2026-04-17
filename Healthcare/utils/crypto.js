import crypto from "crypto";

export const encrypt = (text) => {
  const cipher = crypto.createCipher("aes-256-cbc", process.env.KEY);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
};