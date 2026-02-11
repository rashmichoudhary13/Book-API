import * as Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const queries = req.query;

    const books = await Book.getAllBooks(queries);
    res.json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await Book.getBookById(id);
  res.json(book);
};

export const addBook = async (req, res) => {
  const data = req.body;
  try {
    const result = await Book.createBook(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const result = await Book.update(id, updates);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.removeBook(id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const authorUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const { author_name } = req.body;

    const result = await Book.updateAuthorId(id, author_name);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const filterDataControl = async (req, res) => {
    try {
        const { maxPrice, rating, published_year } = req.query;

        const result = await Book.filterData({
            maxPrice,
            rating,
            published_year
        });

        res.json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

