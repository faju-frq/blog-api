// scripts/seedComments.js
import dotenv from "dotenv";
dotenv.config();

import { sequelize, User, Blog, Comment } from "../models/index.js";

const seedComments = async () => {
  try {
    await sequelize.sync();

    // Fetch users and blogs
    const users = await User.findAll();
    const blogs = await Blog.findAll();

    if (users.length < 3 || blogs.length < 4) {
      console.error("❌ Not enough users or blogs. Seed users/blogs first.");
      process.exit(1);
    }

    await Comment.bulkCreate([
      {
        user_id: users[0].id,
        blog_id: blogs[1].id,
        comment: "Special IMAX screening.",
      },
      {
        user_id: users[0].id,
        blog_id: blogs[2].id,
        comment: "T20 final between India and Australia.",
      },
      {
        user_id: users[1].id,
        blog_id: blogs[3].id,
        comment: "Looking forward to this event!",
      },
      {
        user_id: users[2].id,
        blog_id: blogs[0].id,
        comment: "Can't wait to watch the match!",
      },
    ]);

    console.log("✅ Seeded comments!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding comments:", error);
    process.exit(1);
  }
};

seedComments();
