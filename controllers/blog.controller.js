import { Blog, BlogLike } from "../models/index.js";

export const postBlog = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const user_id = req.user.id;
    const { heading, content } = req.body;

    if (!heading || !content) {
      return res
        .status(400)
        .json({ message: "Heading and content are required." });
    }
    await Blog.create({ user_id, heading, content });
    res.status(201).json({ message: "Blog created succesfully." });
  } catch (err) {
    console.error("error creating blog: ", err);
    res.status(500).json({ message: "Server error!" });
  }
};
export const getMyBlogs = async (req, res) => {
  try {
    const user_id = req.user.id;
    const blogs = await Blog.findAll({
      where: { user_id },
      include: {
        model: Blog,
        attributes: ["id", "user_id", "heading", "content"],
      },
    });
    res.json(blogs);
  } catch (err) {
    console.error("Error in fetching blogs.", err);
    res.status(500).json({ message: "Server error" });
  }
};
export const LikeBlog = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const user_id = req.user.id;
    const blog_id = req.params.id;

    const blog = await Blog.findByPk(blog_id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    const like = await BlogLike.findOne({ where: { user_id, blog_id } });

    if (like) {
      await like.destroy();
      const likesCount = await BlogLike.count({ where: { blog_id } });
      return res.json({
        message: "Blog unliked",
        likes: likesCount,
      });
    } else {
      await BlogLike.create({ user_id, blog_id });
      const likesCount = await BlogLike.count({ where: { blog_id } });
      return res.status(201).json({
        message: "Blog liked",
        likes: likesCount,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const { heading, content } = req.body;

    const fieldsToUpdate = {};
    if (heading !== undefined) fieldsToUpdate.heading = heading;
    if (content !== undefined) fieldsToUpdate.content = content;

    if (Object.keys(fieldsToUpdate).length === 0) {
      return res.status(400).json({ message: "No fields to update provided" });
    }

    const result = await Blog.update(fieldsToUpdate, {
      where: { id }
    });

    const updatedBlog = await Blog.findByPk(id);
    res.status(200).json({ 
      message: "Blog updated successfully",
      blog: updatedBlog
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const deleted = await Blog.destroy({ where: { id } });

    if (deleted) {
      return res.status(200).json({ message: "Blog deleted successfully" });
    } else {
      return res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
