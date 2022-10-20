const express = require('express');
const helmet = require('helmet');
const createError = require('http-errors');
const compression = require('compression');
require('colors');
require('dotenv').config();
require('express-async-errors');

// Imporatant dependencies
const { PORT, NODE_ENV } = process.env;
const { errorHandler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');

// Initiate Express App
const app = express();
const Port = PORT || 5000;

// Connect DB
connectDB();

// Import site routes
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

// Important middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());

// Site routes
app.use('/posts', postRoute);
app.use('/accounts', userRoute);
app.use('/', (req, res) => res.redirect('/posts'));

// Catch error 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// Error Handler
app.use(errorHandler);

app.listen(Port, () => console.log(`Server listing on port ${Port}`.cyan.underline));
