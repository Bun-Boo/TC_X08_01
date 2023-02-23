import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ListTodo from "../components/ListTodo";
import { removeUid } from "../redux/reducers/authSlice";
const Todo = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(removeUid());
    Navigate("/");
  };
  return (
    <div>
      <ListTodo />
    </div>
  );
};

export default Todo;
