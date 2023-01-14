import express from "express";
import { addTodo, getTodo } from "../controllers/todo.js";

import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// cần verifyToken mới được add Todo : ( cần đăng nhập)
router.post("/", addTodo);
router.get("/", getTodo);

export default router;
