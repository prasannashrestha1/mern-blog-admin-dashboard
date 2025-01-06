import User from "./../modals/userModal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ message: "All fields are required." });
  }
  console.log({ username, password, email });

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, password: hashedPassword, email });

  try {
    await newUser.save();
    res.json("Signup Successful");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
