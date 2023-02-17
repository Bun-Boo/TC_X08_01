import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
      <p>Todo</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Todo;
