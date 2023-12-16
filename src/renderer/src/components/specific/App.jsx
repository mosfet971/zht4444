import React from "react";
import { observer } from "mobx-react-lite";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ModalWindowWrapper from "./modalWindows/ModalWindowWrapper.jsx";

import styled from "styled-components";

let Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #ececec;
`;

let App = observer(() => {
    let jsx = [];
    
    if (window.stores.loginStore.isLogined) {
        jsx.push(<MainPage/>);
    } else {
        jsx.push(<LoginPage/>);
    }

    if (window.stores.modalWindowStore.isOpened) {
        jsx.push(<ModalWindowWrapper/>);
    }

    return <Background>{jsx}</Background>;
  });

export default App;