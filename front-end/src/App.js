import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import Todo from "./pages/Todo";


function App() {

  const {isLogin , token } = useSelector(state => state.auth);
  console.log(token);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const handleGetUser = async () => {
    await AsyncStorage.getItem('user').then((value) => setUser(value));
    console.log(user);
    };
    handleGetUser();
  },[]);

  return (
    <div className="App">
      {/* <TestPage /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={!isLogin && user ? <Home /> : <Todo/>} />
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
