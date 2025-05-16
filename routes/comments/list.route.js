import express from "express";
import { listComment } from "../../controllers/listcomment.controller.js";

const router = express.Router();

router.get("/:id",listComment);

export default router;