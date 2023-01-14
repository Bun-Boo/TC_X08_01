import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TestPage from "./pages/TestPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <TestPage /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
