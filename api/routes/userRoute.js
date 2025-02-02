import express from "express";
import { deleteUser, test, updateUser } from "../controllers/userController.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userID", verifyUser, updateUser);
router.delete("/delete/:userID", verifyUser, deleteUser);

export default router;
