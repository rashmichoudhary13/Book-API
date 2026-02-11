import express from 'express';
import {getAuthor, addAuthor, getAllAuthor,updatedDetails} from '../controller/author.controller.js';

const router = express.Router();

//@route /author
router.get('/:id', getAuthor);
router.get('/', getAllAuthor);
router.post('/', addAuthor);
router.put('/:id',updatedDetails);

export default router;