import mongoose from "mongoose";

const schema = new mongoose.Schema({
  user: String,
  action: String,
  metadata: Object,
  timestamp: Date
});

export default mongoose.model("AuditLog", schema);