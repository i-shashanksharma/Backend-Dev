import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

let posts = [
  { id: 1, title: "First Post", content: "Welcome to the blog" },
  { id: 2, title: "Second Post", content: "Learning Express and EJS" }
];

app.get("/blog", (req, res) => {
  res.render("blog", { posts });
});

app.get("/blog/new", (req, res) => {
  res.render("new-post");
});

app.post("/blog", (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: posts.length + 1, title, content });
  res.redirect("/blog");
});

app.get("/blog/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render("post", { post });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});