import {Comment,CommentLike } from "../models/index";

export const commentPost = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const user_id = req.user.id;
    const blog_id = req.params.id;
    const { comment } = req.body;

    if (!blog_id) {
      return res.status(400).json({ message: "Blog not found" });
    }

    await Comment.create({ user_id, blog_id, comment });
    res.status(201).json({ message: "Comment created succesfully." });
  } catch (err) {
    console.error("error creating comment: ", err);
    res.status(50).json({ message: "Server error!" });
  }
};

export const commentLike = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const user_id = req.user.id;
    const comment_id = req.params.id;

    const comment = await Comment.findByPk(comment_id);
    if (!comment) {
      return res.status(404).json({ message: "Invalid comment ID." });
    }
    const like = await CommentLike.findOne({ where: { user_id, comment_id } });

    if (like) {
      await like.destroy();
      const likesCount = await CommentLike.count({ where: { comment_id } });
      return res.json({ message: "Successfully unliked the comment.", likes: likesCount });
    } else {
      await Comment.create({ user_id, comment_id });
      const likesCount = await CommentLike.count({ where: { comment_id } });
      return res
        .status(201)
        .json({ message: "Successfully liked the comment.", likes: likesCount });
    }
  } catch (err) {
    console.error("Error liking/unliking comment:", err);
    res.status(500).json({ message: "Server error." });
  }
};
