import mysql from "mysql2/promise";
import 'dotenv/config';

// Connect with the server

const db = await mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_DATABASE,
});

console.log("MySQL Database connected successfully");

export default db;
