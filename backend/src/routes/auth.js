import express from "express";
import {
  validateSigninInput,
  validateSignupInput,
} from "../middlewares/validators/auth.js";
import { signinUser, signupUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", validateSignupInput, signupUser);
router.post("/signin", validateSigninInput, signinUser);

export default router;
