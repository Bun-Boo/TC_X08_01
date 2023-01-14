import Todo from "../models/Todo.js";

export const addTodo = async (req, res, next) => {
  //userId: req.user.id,
  const newTodo = new Todo({ ...req.body });
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    next(error);
  }
};

export const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};
