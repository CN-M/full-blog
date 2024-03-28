const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
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

const { PORT, NODE_ENV } = process.env;
const { cacth404, errorHandler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');

const app = express();
const Port = PORT || 5000;

connectDB();

// Import site routes
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const categoryRoute = require('./routes/categoryRoute');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use(helmet());
app.use(compression());

// site routes
app.use('/accounts', userRoute);
app.use('/categories', categoryRoute);
app.use('/', postRoute);

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json('Image uploaded!');
});

// Error Middleware
app.use(cacth404);
app.use(errorHandler);

app.listen(Port, () => console.log(`Server listing on port ${Port}`.cyan.underline));
