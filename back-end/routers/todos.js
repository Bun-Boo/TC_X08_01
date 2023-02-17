import express from "express";
import {
  addTodo,
  deleteTodo,
  getByPriority,
  getStatus,
  getTodo,
  getTodoById,
  search,
  updateTodo,
} from "../controllers/todo.js";
import authentication from "../middleWare/authenticate.js";

const router = express.Router();
// route.get('/', authentication.verifyToken , userController.getAllUsers);

// cần verifyToken mới được add Todo : ( cần đăng nhập)
router.post("/", authentication.verifyToken, addTodo);
router.get("/gettodo", authentication.verifyToken, getTodo);
router.get("/getbyid/:id", authentication.verifyToken, getTodoById);
router.put("/:id", authentication.verifyToken, updateTodo);
router.delete("/:id", authentication.verifyToken, deleteTodo);
router.get("/status", authentication.verifyToken, getStatus);
router.get("/priority", authentication.verifyToken, getByPriority);
router.get("/search", authentication.verifyToken, search);
export default router;
