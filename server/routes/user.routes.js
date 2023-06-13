import express from "express";

// Import all controllers
import {
    userSignup,
    userLogin
} from "../controllers/user.controller.js";

const router = express.Router();

router.route('/signup').post(userSignup);
router.route('/login').post(userLogin);

export default router;