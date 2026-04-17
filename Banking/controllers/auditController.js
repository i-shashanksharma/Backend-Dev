import AuditLog from "../models/AuditLog.js";

export const log = async (user, action, metadata) => {
  await AuditLog.create({
    user,
    action,
    metadata,
    timestamp: new Date()
  });
};