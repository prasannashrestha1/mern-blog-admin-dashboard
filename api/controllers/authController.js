import { errorHandler } from "../utils/error.js";
import User from "./../modals/userModal.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return next(errorHandler(400, "All fields are required."));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
    email,
  });

  try {
    await newUser.save();
    res.json("Signup Successful");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, "All fields are required."));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User not Found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Incorrect Passwoord"));
    }

    const { password: pass, ...rest } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
