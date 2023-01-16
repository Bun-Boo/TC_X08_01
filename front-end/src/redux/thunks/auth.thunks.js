import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Requestbase from "../../utils/Request";

export const loginUser = createAsyncThunk('auth/login', async (user) => {
    try {
      const res = await Requestbase.post('api/auth/login', user);
      console.log(res.data);
      await AsyncStorage.setItem('AccessToken', res.data.accessToken);
      await AsyncStorage.setItem('User', JSON.stringify(res.data.others));
      return res.data;
    } catch (error) {
      alert("Email hoặc mật khẩu sai!")
    }
  });
  export const registerUser = createAsyncThunk('auth/register', async (user) => {
    try {
      const res = await Requestbase.post('/api/auth/register', user);
      return res.data;
    } catch (error) {
      console.log(error);;
    }
  })