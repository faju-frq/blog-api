import express from "express";
import { blogLike } from "../../controllers/blog.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.put("/:id", authenticate, blogLike);

export default router;
