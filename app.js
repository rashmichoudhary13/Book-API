import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import 'dotenv/config';

import bookRoute from './routes/bookRoute.js';
import authorRoute from './routes/authorRoute.js';

import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json';
import swaggerAutogen from 'swagger-autogen';

const app = express();

const PORT = process.env.PORT || 3000;

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// view engine setup
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/',(req,res) => {
  res.send("Welcome to MyBook api");
})

app.use("/book", bookRoute);
app.use("/author", authorRoute);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000/")
})

export default app;
