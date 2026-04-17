import validator from "validator";

export const validate = (data) => {
  if (!validator.isEmail(data.email)) return false;
  if (!validator.isDate(data.dob)) return false;
  return true;
};