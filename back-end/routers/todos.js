import express from "express";
import { addTodo, getTodo } from "../controllers/todo.js";

import { loginStatus } from "../controllers/userControllers"

const router = express.Router();

// cần verifyToken mới được add Todo : ( cần đăng nhập)
router.post("/",loginStatus, addTodo);
router.get("/", getTodo);

export default router;
