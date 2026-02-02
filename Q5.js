import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/gallery", (req, res) => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  res.render("gallery", { images });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
