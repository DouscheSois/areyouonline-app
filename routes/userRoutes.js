import express from "express";
const router = express.Router();
import { registerUser, getUsers } from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/register").post(registerUser).get(protect, getUsers);

export default router;
