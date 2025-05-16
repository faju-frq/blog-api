import express from "express";
import { commentPost } from "../../controllers/comment.controller.js";
import { body } from "express-validator";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:id", authenticate, [
  body("comment").notEmpty().withMessage("Content required"),
  commentPost,
]);

export default router;
