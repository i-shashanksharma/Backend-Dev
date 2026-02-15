import books from "../model/data.js";

export const getAllBooks = (req, res) => {
  res.json(books);
};

export const searchBooks = (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({
      message: "Please provide a title to search"
    });
  }

  const result = books.filter(book =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json({
    totalResults: result.length,
    data: result
  });
};
