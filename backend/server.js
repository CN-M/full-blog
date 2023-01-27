const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const createError = require('http-errors');
const compression = require('compression');
require('colors');
require('dotenv').config();
require('express-async-errors');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Important dependencies
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
const categoryRoute = require('./routes/categoryRoute');
// const commentRoute = require('./routes/commentRoute');

// Important middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use(helmet());
app.use(compression());

// Site routes
app.use('/accounts', userRoute);
app.use('/categories', categoryRoute);
app.use('/posts', postRoute);
// app.use('/posts/:slug/comments', commentRoute);
// app.use('/', (req, res) => res.redirect('/posts'));

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json('Image uploaded!');
});

// Catch error 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// Error Handler
app.use(errorHandler);

app.listen(Port, () => console.log(`Server listing on port ${Port}`.cyan.underline));
