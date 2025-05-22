import express from "express";
import { deleteComment } from "../../controllers/comment.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.delete("/:id", authenticate, deleteComment);

export default router;
