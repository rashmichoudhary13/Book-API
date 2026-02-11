import * as Author from "../model/author.model.js";

export const getAuthor = async (req, res) => {
  const id = req.params.id;

  const result = await Author.getAuthor(id);
  res.json(result);
};

export const getAllAuthor = async (req, res) => {
  const result = await Author.getAllAuthor();
  res.json(result);
};

export const addAuthor = async (req, res) => {
  try {
    const data = req.body;
    const result = await Author.createAuthor(data);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updatedDetails = async (req, res) => {
  try {
    const updates = req.body;
    const { id } = req.params;

    const result = await Author.updateDetail(id, updates);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};
