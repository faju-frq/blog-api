// server.js
import express from "express";
import "dotenv/config";
import cors from "cors";
import { sequelize } from "./models/index.js";
import authRoutes from "./routes/auth.route.js";
import blogRoutes from "./routes/blogs/index.js";
import commentRoutes from "./routes/comments/index.js";

const app = express();
const PORT = process.env.PORT || 3306;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/comment", commentRoutes);

// Start the server
app.listen(PORT, async () => {
  try {
    await sequelize.sync({ alter: true }); // Creates/updates tables
    console.log("Database connected and models synced.");
    console.log(`Server is running on port ${PORT}`);
  } catch (err) {
    console.error("Error syncing database:", err);
  }
});
