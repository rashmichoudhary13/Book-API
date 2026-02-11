import db from './sql.js';
import {bookData, authorData} from '../data/bookData.js';

await db.query(
    `INSERT INTO authors
    (name, name_key, nationality) values ?`,[authorData]
) ;

await db.query(
    `INSERT INTO books 
    (title, price, rating, published_year, author_id, in_stock,image_url)
    VALUES ?`, [bookData] );

console.log('Data seeded successfully');