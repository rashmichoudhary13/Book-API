# 📚 MyBook API

A RESTful API built with Node.js, Express, and MySQL for managing books and authors.  
Includes full CRUD operations, filtering, paging, relational database design, and Swagger documentation.

## 🚀 Features

- 📖 CRUD operations for Books
- ✍ CRUD operations for Authors
- 🔎 Filter books by:
  - Maximum Price
  - Rating
  - Published Year
- Pagination
- Search by book title
- 📑 Swagger (OpenAPI) documentation

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL Database
- Swagger-Jsdoc
- dotenv
- mysql2

# 🔗 API Routes

## 📖 Book Routes (`/book`)

| Method | Route              | Description                            |
| ------ | ------------------ | -------------------------------------- |
| GET    | `/book/`           | Get all books                          |
| POST   | `/book/`           | Add a new book                         |
| GET    | `/book/filter`     | Filter books based on query parameters |
| GET    | `/book/:id`        | Get a book by ID                       |
| PUT    | `/book/:id`        | Update book details                    |
| DELETE | `/book/:id`        | Delete a book                          |
| PUT    | `/book/author/:id` | Update author details for a book       |

---

## ✍️ Author Routes (`/author`)

| Method | Route         | Description           |
| ------ | ------------- | --------------------- |
| GET    | `/author/`    | Get all authors       |
| POST   | `/author/`    | Add a new author      |
| GET    | `/author/:id` | Get author by ID      |
| PUT    | `/author/:id` | Update author details |

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/book-api.git
cd book-api
```
### 2️⃣ Install Dependencies
``` npm install ```

### 3️⃣ Setup Environment Variables
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=books_db
DB_PORT=3306
```
## 🗄 Database Schema
Authors Table
```
CREATE TABLE authors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  name_key VARCHAR(255) UNIQUE,
  nationality VARCHAR(255) 
);
```
Books Table
```
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(10,2),
  rating DECIMAL(3,1),
  published_year INT,
  in_stock INT,
  image_url TEXT,
  author_id INT,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);
```
