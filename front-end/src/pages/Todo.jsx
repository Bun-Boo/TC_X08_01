import React from 'react'
import { useDispatch, } from "react-redux";
import {removeUid } from "../redux/reducers/authSlice";

const Todo = () => {
    
    const dispatch = useDispatch();
     const handleLogout = async () => {
      dispatch(removeUid());
  }
  return (
    <div>
        <p>Todo</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Todo