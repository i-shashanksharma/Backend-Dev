import mongoose from "mongoose";

const schema = new mongoose.Schema({
  user: String,
  action: String,
  resource: String,
  timestamp: Date
});

export default mongoose.model("AuditLog", schema);