import Todo from "../models/Todo.js";
import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import { createError } from "../error.js";

export const addTodo = async (req, res, next) => {
  //userId: req.user.id,
  const newTodo = new Todo({ userId: req.user.id, ...req.body });
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json({
      code: 200,
      arraylength: [savedTodo].length,
      data: [savedTodo],
    });
  } catch (error) {
    next(error);
  }
};
export const updateTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return next(createError(404, "todo not found"));
  if (req.user.id === todo.userId) {
    const updateTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      code: 200,
      arraylength: [updateTodo].length,
      data: [updateTodo],
    });
  } else {
    return next(createError(403, "Bạn chỉ có thể cập nhật todo của mình"));
  }
};

export const deleteTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return next(createError(404, "todo not found"));
  if (req.user.id === todo.userId) {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({
      code: 200,
      message: "Xóa thành công!",
    });
  } else {
    return next(createError(403, "Bạn chỉ có thể xóa todo của mình"));
  }
};
export const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.find();
    res.status(200).json({
      code: 200,
      arraylength: todo.length,
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};
export const getTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json({
      code: 200,
      arraylength: [todo].length,
      data: [todo],
    });
  } catch (error) {
    next(error);
  }
};

// get todo theo muc do uu tien
export const getByPriority = async (req, res, next) => {
  const priority = req.query.priority;

  try {
    const todos = await Todo.find({ priority: { $in: priority } });
    res.status(200).json({
      code: 200,
      arraylength: todos.length,
      data: todos,
    });
  } catch (error) {
    next(error);
  }
};

//get todo theo tinh trang
export const getStatus = async (req, res, next) => {
  const status = req.query.status;
  try {
    const todos = await Todo.find({ status: { $in: status } });
    res.status(200).json({
      code: 200,
      arraylength: todos.length,
      data: todos,
    });
  } catch (error) {
    next(error);
  }
};

// tim kiem todo : title
export const search = async (req, res, next) => {
  const query = req.query.search;
  try {
    const todos = await Todo.find({
      title: {
        $regex: query,
        $options: "i",
      },
    });
    res.status(200).json({
      code: 200,
      arraylength: todos.length,
      data: todos,
    });
  } catch (error) {}
};
