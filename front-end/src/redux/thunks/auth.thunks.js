import { createAsyncThunk } from "@reduxjs/toolkit";
import Requestbase from "../../utils/Request";
// import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const loginUser = createAsyncThunk('auth/login', async (user) => {
  try {
    const res = await Requestbase.post('api/auth/login', user);
    return await res.data;
  } catch (error) {
    if (error.message === "Request failed with status code 404") {
      alert("Email or password wrong!")
      // toast.warning("Email or password wrong!")
    }
    if (error.message === "Network Error") {
      alert("Login Failed!")
    }
  }
});
export const registerUser = createAsyncThunk('auth/register', async (user) => {
  try {
    const res = await Requestbase.post('api/auth/register', user);
    return await res.data;
  } catch (error) {
    if (error.message === "Request failed with status code 500") {
      alert("Email already exists!")
    }
  }
});

export const loginWithGoogle = createAsyncThunk('auth/google', async () => {
  try {
    window.open("http://localhost:3000/auth/google", "_self");
  } catch (error) {
    alert(error)
  }
});

export const loginWithFacebook = createAsyncThunk('auth/facebook', async () => {
  try {
    window.open("http://localhost:3000/auth/facebook", "_self");
  } catch (error) {
    alert(error)
  }
});
export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    window.open("http://localhost:3000/auth/logout", "_self");
  } catch (error) {
    alert(error)
  }
});
