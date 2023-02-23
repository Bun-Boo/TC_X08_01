import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./list-todo/styles/GlobalStyles.css";
import "./components/styles/GlobalStyles.css";
import { Provider } from "react-redux";
// import { store } from "./list-todo/App/Sotre";
// import store from "./redux/store";
// // import { store } from "./list-todo/App/Sotre";
// import { store } from "./components/App/Sotre";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
