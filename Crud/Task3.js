import express from "express";

const app = express();

const authorize = (req, res, next) => {
  const token = req.query.token;

  if (token !== "admin123") {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  next();
};

app.get("/profile", authorize, (req, res) => {
  res.status(200).json({
    message: "Welcome to profile",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
