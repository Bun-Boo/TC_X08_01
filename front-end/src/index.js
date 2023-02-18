import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./list-todo/styles/GlobalStyles.css";
import "./components/styles/GlobalStyles.css";
import { Provider } from "react-redux";
// import { store } from "./list-todo/App/Sotre";
// import store from "./redux/store";
// // import { store } from "./list-todo/App/Sotre";
import { store } from "./components/App/Sotre";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
