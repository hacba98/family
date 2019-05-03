import { Router } from "express";
import passport from "passport";
const router = new Router();

import * as UserController from "../controllers/user.controller";

/**
 * @route POST auth/register
 * @description Register new user
 * @access Public
 * @param email for email
 * @param password for password
 */
router.route("/register").post(UserController.registerUser);

/**
 * @route POST auth/login
 * @description Login user
 * @access Public
 * @param email for email
 * @param password for password
 */
router.route("/login").post(UserController.loginUser);

export default router;
