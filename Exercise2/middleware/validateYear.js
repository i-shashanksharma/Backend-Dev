export const validateYear = (req, res, next) => {
  const { year } = req.query;

  if (year) {
    const parsedYear = parseInt(year);
    const currentYear = new Date().getFullYear();

    if (
      isNaN(parsedYear) ||
      parsedYear < 1900 ||
      parsedYear > currentYear
    ) {
      return res.status(400).json({
        message: "Year must be a valid number between 1900 and current year"
      });
    }
  }

  next();
};
