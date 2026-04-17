export const isAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }
  next();
};

export const isAdmin = (req, res, next) => {
  if (req.session.user?.role !== "admin") {
    return res.status(403).send("Forbidden");
  }
  next();
};