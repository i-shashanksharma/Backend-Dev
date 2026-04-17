import axios from "axios";

let failure = 0;

export const paymentRequest = async (data) => {
  if (failure > 5) throw new Error("Service Down");

  try {
    const res = await axios.post("https://payment.api", data);
    failure = 0;
    return res.data;
  } catch (err) {
    failure++;
    throw err;
  }
};