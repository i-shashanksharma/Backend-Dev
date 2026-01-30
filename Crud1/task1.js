import express from "express";

const app = express();

const logger = (req, res, next) => {
  console.log(
    `Method: ${req.method} | URL: ${req.url} | Time: ${new Date().toLocaleString()}`
  );
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
