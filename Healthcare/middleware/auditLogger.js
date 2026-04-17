import AuditLog from "../models/AuditLog.js";

export const logAccess = async (req, action, resource) => {
  await AuditLog.create({
    user: req.session.user.id,
    action,
    resource,
    timestamp: new Date()
  });
};