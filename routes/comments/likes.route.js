import express from "express";
import { likeComment } from "../../controllers/comment.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.put("/:id", authenticate, likeComment);

export default router;
