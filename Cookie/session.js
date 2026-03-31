import express from "express";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

app.get("/login", (req, res) => {
  let userInfo = {
    id: 1,
    name: "raj",
  };
  req.session.user = userInfo;
  res.send("User logged in successfully");
});

app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user.name}`);
  } else {
    res.status(401).send("Please login to view your profile");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Could not log out");
    }
    res.send("Logged out successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});