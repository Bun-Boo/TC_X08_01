import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "../thunks/auth.thunks";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
      loading : false,
      token : "",
      user: null,
      isLogin: false
  },
  reducers: {
    removeUid: (state) => {
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('user');
      state.token = '';
      state.user = null;
      state.isLogin = false;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.isLogin = false;
      })
      .addCase(loginUser.fulfilled, (state, action ) => {
        state.loading = false;
        if(action.payload){
          console.log(action.payload.newUser);
          state.token = action.payload.accessToken;
          state.user = action.payload.newUser;
          state.isLogin = true;
          AsyncStorage.setItem("token", action.payload.accessToken);
          AsyncStorage.setItem("user", JSON.stringify(action.payload.newUser));
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = true;
        state.isLogin = false;
        alert("Login failed!")
      })
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.isLogin = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.isLogin = false;
        alert("Register failed!")
      })
  }
});

export const { addUid, removeUid }  = authSlice.actions;
export default authSlice.reducer;