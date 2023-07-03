import express from "express";
import { getUser, updateUser,getAllUser } from "../controllers/user.js";

const router = express.Router();

router.get("/find/:id", getUser)
router.put("/", updateUser)
router.get("/all",getAllUser)

export default router