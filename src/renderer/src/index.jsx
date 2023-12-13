import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";
import { storesReg } from "./stores";
import ButtonTest from "./components/test/ButtonTest.jsx";
import InputTest from "./components/test/InputTest.jsx";
import TextTest from "./components/test/TextTest.jsx";

storesReg();

let App = observer(() => {
  return (<>
    <ButtonTest/>
    <InputTest/>
    <TextTest/>
  </>);
});

ReactDOM.render(
  <App/>,
  document.getElementById("reactRoot")
)