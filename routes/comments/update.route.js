import express from "express";
import { body } from "express-validator";
import { authenticate } from "../../middleware/auth.middleware.js";
import { updateComment } from "../../controllers/comment.controller.js";

const router = express.Router();

router.put(
  "/:id",
  authenticate,
  body("comment").notEmpty().withMessage("comment required"),
  updateComment
);

export default router;
