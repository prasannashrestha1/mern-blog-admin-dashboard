import { errorHandler } from "../utils/error.js";
import User from "./../modals/userModal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    next(errorHandler(400, "All fields are required."));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, password: hashedPassword, email });

  try {
    await newUser.save();
    res.json("Signup Successful");
  } catch (error) {
    next(error);
  }
};
