import express from "express";

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Rohit" },
  { id: 3, name: "Ankit" },
  { id: 4, name: "Rahul Sharma" }
];

app.get("/users", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.json(users);
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredUsers);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
