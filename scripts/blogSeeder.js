// scripts/seedBlogs.js
import dotenv from "dotenv";
dotenv.config();

import { sequelize, Blog, User } from "../models/index.js";

const seedBlogs = async () => {
  try {
    await sequelize.sync();

    const users = await User.findAll();

    if (users.length < 3) {
      console.error("Not enough users found. Please seed users first.");
      process.exit(1);
    }

    await Blog.bulkCreate([
      {
        user_id: users[0].id,
        heading: "Cricket Match",
        content: "T20 final between India and Australia.",
      },
      {
        user_id: users[1].id,
        heading: "Movie Night: Inception",
        content: "Special IMAX screening.",
      },
      {
        user_id: users[2].id,
        heading: "Lorem ipsum dolor sit amet",
        content: "Lorem lorem lorem lorem lorem lorem lorem lorem",
      },
      {
        user_id: users[0].id,
        heading: "Lrem ipsum is amazing",
        content:
          "Special IMAX screening of Lorem ipsum is back in action at select PVR theatres",
      },
    ]);

    console.log("✅ Seeded blogs!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding blogs:", error);
    process.exit(1);
  }
};

seedBlogs();
