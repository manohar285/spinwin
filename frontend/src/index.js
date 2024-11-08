import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TodolistsContextProvider } from "./context/TodolistContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TodolistsContextProvider>
        <App />
      </TodolistsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
