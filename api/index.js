import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

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

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
