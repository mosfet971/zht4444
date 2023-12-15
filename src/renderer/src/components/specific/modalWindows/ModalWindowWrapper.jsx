import React from "react";
import { observer } from "mobx-react-lite";

import WindowLoginError from "./WindowLoginError.jsx";

let ModalWindowWrapper = observer(() => {
    let jsx = [];

    switch (window.stores.modalWindowStore.type) {
        case "WindowLoginError":
            jsx.push(<WindowLoginError/>);
            break;
    
        default:
            jsx.push(<></>);
    }

    return jsx;
  });

export default ModalWindowWrapper;