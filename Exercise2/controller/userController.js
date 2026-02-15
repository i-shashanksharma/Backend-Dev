import books from "../model/data.js";

export const getAllBooks = (req, res) => {
  const { author, year } = req.query;

  let filteredBooks = books;

  if (author) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.author.toLowerCase() === author.toLowerCase()
    );
  }

  if (year) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.year === parseInt(year)
    );
  }

  res.json(filteredBooks);
};
