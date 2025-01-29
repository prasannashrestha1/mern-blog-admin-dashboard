import Post from "../modals/blogModal.js";
import { errorHandler } from "./../utils/error.js";

export const createpost = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "Only Admin can create a post"));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(403, "Title and Content should not be empty"));
  }
  try {
    const slug = req.body.title.split(" ").join("-").toLowerCase();
    const newPost = new Post({
      ...req.body,
      slug,
      userId: req.user.id,
    });
    await newPost.save();
    res.status(201).json("Post saved Successfully");
  } catch (error) {
    next(error);
  }
};
