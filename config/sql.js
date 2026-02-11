import mysql from "mysql2/promise";
import 'dotenv/config';

// Connect with the server

const db = await mysql.createConnection({
  host: "localhost",
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: "bookdb",
});

console.log("MySQL Database connected successfully");

export default db;
