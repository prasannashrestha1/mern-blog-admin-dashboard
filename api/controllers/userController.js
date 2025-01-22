import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "./../modals/userModal.js";

export const test = (req, res) => {
  res.json({ message: "router connected" });
};

export const updateUser = async (req, res, next) => {
  if (req.body.id !== req.params.userID) {
    return next(errorHandler(403, "Unauthorized Permissions"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "Password length must be at least 6 characters")
      );
    }
    const hashedPassword = bcryptjs.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;
  }
  if (req.body.username) {
    if (req.body.username.length < 3 || req.body.username.length > 20) {
      return next(
        errorHandler(
          400,
          "Username length should be greater than 3 and less than 20"
        )
      );
    }
  }
  try {
    const updateTheUser = await User.findByIdAndUpdate(
      req.params.userID,
      {
        $set: {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        },
      },
      { new: true }
    );
    if (!updateTheUser) {
      return next(errorHandler(404, "User not found"));
    }
    const { password, ...rest } = updateTheUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
