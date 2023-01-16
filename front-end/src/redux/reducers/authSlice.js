import { createSlice} from "@reduxjs/toolkit"
import { loginUser, registerUser } from "../thunks/auth.thunks";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      status: 'idle',
      currentUser: {},
      isLogin: false,
      error: '',
    },
    register: {
      status: 'idle',
      error: '',
    },
  },
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.login.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.status = 'succeeded'
        state.login.currentUser = action.payload;
        state.login.isLogin = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.status = 'failed';
        state.login.error = action.error.message;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.register.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.register.status = 'succeeded';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.register.status = 'failed';
        state.register.error = action.error.message;
      })
  }
});

export default authSlice.reducer;