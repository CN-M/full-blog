"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const helmet_1 = __importDefault(require("helmet"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const db_1 = require("./config/db");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
dotenv_1.default.config();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path_1.default.extname(file.originalname));
    },
});
const { PORT, NODE_ENV } = process.env;
const app = (0, express_1.default)();
const Port = PORT || 5000;
(0, db_1.connectDB)();
// Import site routes
// import categoryRoute from "./routes/categoryRoute";
// import postRoute from "./routes/postRoute";
// import userRoute from "./routes/userRoute";
const categoryRoute_1 = __importDefault(require("./routes/categoryRoute"));
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "/images")));
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
// site routes
app.use("/accounts", userRoute);
app.use("/categories", categoryRoute_1.default);
app.use("/", postRoute);
const upload = (0, multer_1.default)({ storage });
app.post("/upload", upload.single("image"), (req, res) => {
    res.status(200).json("Image uploaded!");
});
// Error Middleware
app.use(errorMiddleware_1.catch404);
app.use(errorMiddleware_1.errorHandler);
app.listen(Port, () => console.log(`Server listing on port ${Port}`.cyan.underline));
