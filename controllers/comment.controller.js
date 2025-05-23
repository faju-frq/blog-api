import {Blog, Comment, CommentLike } from "../models/index.js";

export const postComment = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const user_id = req.user.id;
    const blog_id = req.params.id;
    const { comment } = req.body;
    const blog = await Blog.findByPk(blog_id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await Comment.create({ user_id, blog_id, comment });
    res.status(201).json({ message: "Comment created successfully.",comment });
  } catch (err) {
    console.error("error creating comment: ", err);
    res.status(500).json({ message: "Server error!" });
  }
};
export const getMyComments = async (req, res) => {
  try {
    const user_id = req.user.id;
    const blogs = await Comment.findAll({
      where: { user_id },
      include: {
        model: Comment,
        attributes: ["id", "user_id", "blog_id", "comment"],
      },
    });
    res.json(blogs);
  } catch (err) {
    console.error("Error in fetching comments.", err);
    res.status(500).json({ message: "Server error" });
  }
};
export const likeComment = async (req, res) => {
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
      return res.json({
        message: "Successfully unliked the comment.",
        likes: likesCount,
      });
    } else {
      await CommentLike.create({ user_id, comment_id });
      const likesCount = await CommentLike.count({ where: { comment_id } });
      return res
        .status(201)
        .json({
          message: "Successfully liked the comment.",
          likes: likesCount,
        });
    }
  } catch (err) {
    console.error("Error liking/unliking comment:", err);
    res.status(500).json({ message: "Server error." });
  }
};

export const updateComment = async (req, res) => {
  try {
    const id = req.params.id;           
    const { comment } = req.body;         
    const result = await Comment.update(
      { comment },                    
      { where: { id } }                
    );

   const updatedComment = await Comment.findByPk(id);
    res.status(200).json({ 
      message: "comment updated successfully",
      blog: updatedComment
    });
  } catch (error) {
    console.error("Error updating comment:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const deleteComment = async (req, res) => {
  try {
    const id = req.params.id;

    const deleted = await Comment.destroy({ where: { id } });

    if (deleted) {
      return res.status(200).json({ message: "Comment deleted successfully" });
    } else {
      return res.status(404).json({ message: "Comment not found" });
    }
  } catch (error) {
    console.error("Error deleting Comment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
