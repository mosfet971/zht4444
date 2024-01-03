import React from "react";
import ReactDOM from "react-dom";
import { storesInit } from "./stores";
import App from "./components/specific/App.jsx";
import "7.css/dist/7.css";

storesInit();

ReactDOM.render(
  <App/>,
  document.getElementById("reactRoot")
)