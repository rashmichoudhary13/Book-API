import express from 'express';
import {getBooks, getBookById, addBook, updateBook, deleteBook, authorUpdate,filterDataControl} from '../controller/book.controller.js';

const router = express.Router();

// @route get /book
router.get('/', getBooks);
router.post('/', addBook);

//@route filter
router.get('/filter',filterDataControl);

//@route /book/id
router.get('/:id',getBookById);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);

//@route /book/author/id
router.put('/author/:id',authorUpdate);



export default router;