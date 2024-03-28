import "colors";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import multer from "multer";
import path from "path";
import { connectDB } from "./config/db";
import { catch404, errorHandler } from "./middleware/errorMiddleware";

dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const { PORT, NODE_ENV } = process.env;

const app = express();
const Port = PORT || 5000;

connectDB();

// Import site routes
// import categoryRoute from "./routes/categoryRoute";
// import postRoute from "./routes/postRoute";
// import userRoute from "./routes/userRoute";

import categoryRoute from "./routes/categoryRoute";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(helmet());
app.use(compression());

// site routes
app.use("/accounts", userRoute);
app.use("/categories", categoryRoute);
app.use("/", postRoute);

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json("Image uploaded!");
});

// Error Middleware
app.use(catch404);
app.use(errorHandler);

app.listen(Port, () =>
  console.log(`Server listing on port ${Port}`.cyan.underline)
);
