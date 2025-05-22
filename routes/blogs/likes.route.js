import express from "express";
import { LikeBlog } from "../../controllers/blog.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.put("/:id", authenticate, LikeBlog);

export default router;
