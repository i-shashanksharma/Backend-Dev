import mongoose from "mongoose";

const schema = new mongoose.Schema({
  patient: String,
  doctor: String,
  date: Date
});

export default mongoose.model("Appointment", schema);