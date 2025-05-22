import express from "express";
import { updateBlog } from "../../controllers/blog.controller.js";
import { body, oneOf} from "express-validator";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.put(
  "/:id",
  authenticate,

  oneOf(
    [
      body("heading").notEmpty().withMessage("Heading cannot be empty"),
      body("content").notEmpty().withMessage("Content cannot be empty"),
    ],
    "At least one of heading or content must be provided"
  ),

  updateBlog
);

export default router;
