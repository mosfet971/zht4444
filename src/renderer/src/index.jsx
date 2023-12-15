import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";
import { storesReg } from "./stores";
import App from "./components/specific/App.jsx";
import "7.css/dist/7.css";

storesReg();

ReactDOM.render(
  <App/>,
  document.getElementById("reactRoot")
)