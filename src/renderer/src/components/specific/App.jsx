import React from "react";
import { observer } from "mobx-react-lite";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ModalWindowWrapper from "./modalWindows/ModalWindowWrapper.jsx";

let App = observer(() => {
    /*
    useEffect(() => {
        if (window.stores.loginStore.isNotValid) {
            window.stores.modalWindowStore.open("LOGIN_ERROR");
        } else {
            window.stores.modalWindowStore.close();
        }
    }, [window.stores.loginStore.isNotValid]);
    */
    let jsx = [];
    
    if (window.stores.loginStore.isLogined) {
        jsx.push(<MainPage/>);
    } else {
        jsx.push(<LoginPage/>);
    }

    if (window.stores.modalWindowStore.isOpened) {
        jsx.push(<ModalWindowWrapper/>);
    }

    return jsx;
  });

export default App;