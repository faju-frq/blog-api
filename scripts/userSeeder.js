// scripts/seed.js
import { sequelize, User } from "../models/index.js";
import bcrypt from "bcryptjs";
import "dotenv/config";

const seedUsers = async () => {
  try {
    await sequelize.sync();

    const users = [
      {
        name: "Cricket Match",
        email: "john@example.com",
        phone: "123456778",
        password: await bcrypt.hash("john@123", 10),
      },
      {
        name: "Football Match",
        email: "mary@example.com",
        phone: "123456678",
        password: await bcrypt.hash("mary@123", 10),
      },
      {
        name: "Damon Match",
        email: "damon@example.com",
        phone: "123455778",
        password: await bcrypt.hash("damon@123", 10),
      },
    ];

    await User.bulkCreate(users);

    console.log("✅ Seeded users successfully!");
  } catch (err) {
    console.error("❌ Error seeding users:", err);
  } finally {
    await sequelize.close(); // Good practice to close connection
  }
};

seedUsers();
