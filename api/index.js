import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to db successfully");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });

  app.listen(3000, () => {
    console.log("Connected to the server and running on 3000");
  });
};

connect();
