import authors from "../model/authorData.js";

export const getAllAuthors = (req, res) => {
  res.json(authors);
};

export const getAuthorById = (req, res) => {
  const id = parseInt(req.params.id);

  const author = authors.find(a => a.id === id);

  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  res.json(author);
};

export const createAuthor = (req, res) => {
  const { name, country } = req.body;

  const newAuthor = {
    id: authors.length + 1,
    name,
    country
  };

  authors.push(newAuthor);

  res.status(201).json(newAuthor);
};

export const updateAuthor = (req, res) => {
  const id = parseInt(req.params.id);

  const author = authors.find(a => a.id === id);

  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  const { name, country } = req.body;

  if (name) author.name = name;
  if (country) author.country = country;

  res.json(author);
};

export const deleteAuthor = (req, res) => {
  const id = parseInt(req.params.id);

  const index = authors.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Author not found" });
  }

  authors.splice(index, 1);

  res.json({ message: "Author deleted successfully" });
};
