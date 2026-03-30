import mysql from "mysql2/promise";
import 'dotenv/config';
import fs from 'fs';
// Connect with the server

const db = await mysql.createPool({
  host: process.env.SQL_HOST,
  port: process.env.DB_PORT,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_DATABASE,
  ssl: {
    ca: fs.readFileSync(process.env.CA)
  }
});

console.log("MySQL Database connected successfully");

export default db;
