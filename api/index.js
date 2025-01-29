import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import postRoute from "./routes/postRoute.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow cookies to be sent
  })
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({
  storage,
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit the process if the DB connection fails
  }
};

// Start the server
const startServer = () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

// Connect to the database and start the server
connectDB().then(startServer);

// Define routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }

  const imageUrl = `http://localhost:3000/Images/${req.file.filename}`;

  console.log("File uploaded:", imageUrl);
  res.status(200).json({ success: true, path: req.file.path });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
