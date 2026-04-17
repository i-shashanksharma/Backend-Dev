import mongoose from "mongoose";

const schema = new mongoose.Schema({
  patient: String,
  doctor: String,
  data: String
});

export default mongoose.model("MedicalRecord", schema);