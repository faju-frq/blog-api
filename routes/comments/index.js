import { Router } from "express";
import createRoute from "./create.route.js";
import likesRoute from "./likes.route.js";
import listRoute from "./list.route.js";
import updateRoute from "./update.route.js";
import deleteRoute from "./delete.route.js";

const router = Router();

router.use("/create", createRoute);
router.use("/likes", likesRoute);
router.use("/list", listRoute);
router.use("/update", updateRoute);
router.use("/delete", deleteRoute);

export default router;
