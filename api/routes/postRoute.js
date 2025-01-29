import express from "express";
import { verifyUser } from "./../utils/verifyUser.js";
import { createpost } from "../controllers/postController.js";

const router = express.Router();

router.post("/create", verifyUser, createpost);

export default router;
