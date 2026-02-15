import books from "../model/data.js";

export const getAllBooks = (req, res) => {
  const { author, year, page = 1, limit = 5 } = req.query;

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

  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  res.json({
    totalBooks: filteredBooks.length,
    currentPage: pageNumber,
    totalPages: Math.ceil(filteredBooks.length / limitNumber),
    data: paginatedBooks
  });
};
