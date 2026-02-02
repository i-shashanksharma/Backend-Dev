import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/contact", (req, res) => {
  res.send("Contact page working");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Thank you ${name}, your message has been received.`);
});

app.listen(3000,()=> {
    console.log("server is listening in port 3000");
})