const Book = require("../models/Book.js");

const listAllBooks = () => {
  return Book.find({});
};

const insertBook = (data) => {
  const book = new Book(data);
  return book.save();
};

module.exports = { listAllBooks, insertBook };

