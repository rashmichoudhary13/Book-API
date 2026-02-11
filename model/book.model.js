import db from "../config/sql.js";

export const getAllBooks = async (queries) => {
  let {
    search,
    maxprice,
    rating,
    published_year,
    page = 1,
    limit = 10,
  } = queries;

  page = Number(page);
  limit = Number(limit);
  const offset = (page - 1) * limit;

  const values = [];
  const conditions = [];

  //search
  if (search) {
    conditions.push("title LIKE ?");
    values.push(`%${search}%`);
  }

  //price filter
  if (maxprice) {
    conditions.push("price <= ?");
    values.push(Number(maxprice));
  }

  //rating filter
  if (rating) {
    conditions.push("rating >= ?");
    values.push(Number(rating));
  }

  //published_year filter
  if (published_year) {
    conditions.push("published_year >= ?");
    values.push(Number(published_year));
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

  const sql = `SELECT * FROM books ${whereClause} LIMIT ${limit} OFFSET ${offset}`;

  const [row] = await db.execute(sql,values);

  return {
    page,
    limit,
    count: row.length,
    data: row
  };
};

export const getBookById = async (id) => {
  const [row] = await db.execute(`SELECT * FROM books WHERE id = ?`, [id]);
  return row;
};

export const createBook = async (data) => {
  const {
    title,
    price,
    rating,
    published_year,
    author_name,
    nationality,
    in_stock,
    image_url,
  } = data;

  if (!title || !author_name) {
    throw new Error("title and author name are required.");
  }

  const normalizedname = author_name.toLowerCase().replace(/\s+/g, "");

  try {
    const [author_resutl] = await db.execute(
      `INSERT INTO authors (name,name_key,nationality) 
        VALUES (?,?,?)
        ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id)`,
      [author_name, normalizedname, nationality],
    );

    const author_id = author_resutl.insertId;

    await db.execute(
      `INSERT INTO books (title,price,rating, published_year,author_id,in_stock) values (?,?,?,?,?,?,?)`,
      [title, price, rating, published_year, author_id, in_stock,image_url],
    );
    return { message: "Inserted data successfully" };
  } catch (err) {
    throw err;
  }
};

export const update = async (id, updates) => {
  const allowedFields = [
    "title",
    "price",
    "rating",
    "published_year",
    "in_stock",
    "image_url",
  ];

  const keys = Object.keys(updates).filter((key) =>
    allowedFields.includes(key),
  );

  if (keys.length === 0) {
    throw new Error("No valid fields to update");
  }

  const setClause = keys.map((key) => `${key}= ?`).join(", ");
  const value = keys.map((key) => updates[key]);

  const [result] = await db.execute(
    `UPDATE books SET ${setClause} WHERE id = ?`,
    [...value, id],
  );

  if (result.affectedRows === 0) {
    throw new Error("Book not found");
  }

  return { message: "Updated successfully" };
};

export const removeBook = async (id) => {
  const [result] = await db.execute(`DELETE FROM books WHERE id = ?`, [id]);

  if (result.affectedRows === 0) {
    throw new Error("book not found");
  }

  return { message: "Deleted Successfully" };
};

export const updateAuthorId = async (id, author_name) => {
  if (!author_name) {
    throw new Error("Author name is required.");
  }

  const normalizedname = author_name.toLowerCase().replace(/\s+/g, "");

  const [result] = await db.execute(
    `INSERT INTO authors (name, name_key, nationality) VALUES (?,?,?)
     ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id)`,
    [author_name, normalizedname, "none"],
  );

  const author_id = result.insertId;

  await db.execute(`UPDATE books SET author_id = ? WHERE id = ?`, [
    author_id,
    id,
  ]);

  return { message: "updated author successfully" };
};

export const filterData = async ({ maxPrice, rating, published_year }) => {
  const price = parseInt(maxPrice);
  const rat = parseInt(rating);
  const year = parseInt(published_year);

  const [row] = await db.execute(
    `SELECT * FROM books WHERE price < ? AND rating >= ? AND published_year >= ?`,
    [price, rat, year],
  );

  if (row.length === 0) {
    return { message: "No data found" };
  }

  return row;
};
