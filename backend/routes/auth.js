import express from "express";
import { registerUser, showMessage } from "../controllers/auth";

const router = express.Router();

router.get("/:message", showMessage);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
