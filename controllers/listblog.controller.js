
import {sequelize, Blog, User } from "../models/index.js";

export const listMyBlogs = async (req, res) => {
  try {
    const user_id = req.user.id;
    const blogs = await Blog.findAll({
      where: { user_id },
      attributes: [
        "heading",
        "content",
        [
          sequelize.literal(`
      (SELECT COUNT(*) 
       FROM blog_likes 
       WHERE blog_likes.blog_id = Blog.id)
    `),
          "likes",
        ],
      ],
      include: [{ model: User, attributes: ["name"] }],
    });
    res.json(blogs);
  } catch (err) {
    console.error("error fetching blogs.", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const listAllBlogs = async (req,res) => {
  try {
    const blogs = await Blog.findAll({
      attributes: [
        "heading",
        "content",
        [
          sequelize.literal(`
      (SELECT COUNT(*) 
       FROM blog_likes 
       WHERE blog_likes.blog_id = Blog.id)
    `),
          "likes",
        ],
      ],
      include: [{ model: User, attributes: ["name"] }],
    });
    res.status(201).json(blogs);
  } catch (err) {
    console.error("error fetching blogs.", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
