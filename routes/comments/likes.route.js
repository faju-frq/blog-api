import express from "express";
import { commentLike } from "../../controllers/comment.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.put("/:id", authenticate, commentLike);

export default router;
