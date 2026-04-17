export const allowRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.session.user.role)) {
    return res.sendStatus(403);
  }
  next();
};