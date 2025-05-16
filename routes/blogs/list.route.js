import express from "express";
import {
  listAllBlogs,
  listMyBlogs,
} from "../../controllers/listblog.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", listAllBlogs);
router.get("/myBlogs",authenticate,listMyBlogs)

export default router;
