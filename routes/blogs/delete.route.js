import express from "express";
import { deleteBlog } from "../../controllers/blog.controller.js";

import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();


router.delete(
  "/:id", authenticate,[
  deleteBlog]
);

export default router;