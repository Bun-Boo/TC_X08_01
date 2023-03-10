import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
// import ListTodo from "./components/ListTodo";
import Todo from "./pages/Todo";
import SettingUser from "./components/SettingUser/SettingUser";

function App() {
  const { isLogin, token } = useSelector((state) => state?.auth);
  console.log(token);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const handleGetUser = async () => {
      await AsyncStorage.getItem("user").then((value) => setUser(value));
      console.log(user);
    };
    handleGetUser();
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={!isLogin && user ? <Home /> : <Todo/>} />
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SignUp />} /> */}

            {/* <Route index element={isLogin && user ? <ListTodo /> : <Home />} /> */}
            <Route path="login" element={<SignIn />} />
            <Route index element={<Home />} />
            <Route path="register" element={<SignUp />} />
            <Route path="listtodo" element={<Todo />} />
            <Route path="setting" element={<SettingUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
