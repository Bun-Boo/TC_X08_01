import express from "express";
import { addTodo, getTodo } from "../controllers/todo.js";


const router = express.Router();

// cần verifyToken mới được add Todo : ( cần đăng nhập)
router.post("/addtodo", addTodo);
router.get("/gettodo", getTodo);

export default router;
