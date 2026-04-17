import validator from "validator";

export const validateRegister = ({ username, email, bio, profileUrl }) => {
  if (!validator.isAlphanumeric(username)) {
    return "Username must be alphanumeric";
  }

  if (!validator.isEmail(email)) {
    return "Invalid email";
  }

  if (profileUrl && !validator.isURL(profileUrl, { protocols: ["https"] })) {
    return "Profile URL must be secure (HTTPS)";
  }

  return null;
};