import express from "express";

const app = express();
const PORT = 3000;

const responseTimeLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration}ms`);
  });

  next();
};

app.use(responseTimeLogger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  setTimeout(() => {
    res.json([{ name: "Rahul" }, { name: "Ankit" }]);
  }, 200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
