
import Blog from "../models/index";

export const blogPost = async (req, res) => {
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

export const blogLike = async (req, res) => {
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
    const like = await Blog.findOne({ where: { user_id, blog_id } });

    if (like) {
      await like.destroy();
      blog.likes -= 1;
      await blog.save();
      return res.json({ message: "blog unliked.", likes: blog.likes });
    } else {
      await Blog.create({ user_id, blog_id });
      blog.likes += 1;
      await Blog.save();
      return res.status(201).json({ message: "Blog liked", likes: Blog.likes });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({message:"Server error."})
  }
};
