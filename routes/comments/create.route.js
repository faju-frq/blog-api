import express from "express";
import { postComment } from "../../controllers/comment.controller.js";
import { body } from "express-validator";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:id", authenticate, [
  body("comment").notEmpty().withMessage("Content required"),
  postComment,
]);

export default router;
