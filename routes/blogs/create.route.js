import express from "express";
import { postBlog } from "../../controllers/blog.controller.js";
import { body } from "express-validator";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();


router.post(
  "/", authenticate,[
  [
    body("heading").notEmpty().withMessage("Heading required"),
    body("content").notEmpty().withMessage("Content required"),
  ],
  postBlog]
);

export default router;