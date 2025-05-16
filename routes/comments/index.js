import { Router } from "express";
import createRoute from "./create.route.js";
import likesRoute from "./likes.route.js";
import listRoute from "./list.route.js";

const router = Router();

router.use("/create", createRoute);
router.use("/likes", likesRoute);
router.use("/list", listRoute);

export default router;