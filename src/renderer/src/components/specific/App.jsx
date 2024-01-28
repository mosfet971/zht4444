import React from "react";
import { observer } from "mobx-react-lite";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ModalWindowWrapper from "./wrappers/ModalWindowWrapper.jsx";

import styled from "styled-components";

import { modalWindowsStore } from "../../stores/ModalWindowsStore.js";
import { loginStore } from "../../stores/LoginStore.js"

let Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #ececec;
`;

let WindowDragArea = styled.div`
  width: 100vw;
  position: fixed;
  height: 1.5em;
  top: 0;
  -webkit-app-region: drag;
  z-index: 1;
`;

let App = observer(() => {
    let markup = [];
    
    markup.push(<WindowDragArea></WindowDragArea>);

    if (loginStore.isLogined) {
      markup.push(<MainPage/>);
    } else {
      markup.push(<LoginPage/>);
    }

    if (modalWindowsStore.isOpened) {
      markup.push(<ModalWindowWrapper/>);
    }

    return <Background>{markup}</Background>;
  });

export default App;