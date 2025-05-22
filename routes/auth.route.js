import express from "express";
import { register, login , logout,deleteUser} from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { body } from "express-validator";

const router = express.Router();


router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("phone").notEmpty(),
    body("password").isLength({minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1}),
  ],
  register
);


router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  login
);

router.post(
  "/logout",
  logout
);

router.post(
  "/deleteUser",
  authenticate,
  deleteUser
);
export default router;
