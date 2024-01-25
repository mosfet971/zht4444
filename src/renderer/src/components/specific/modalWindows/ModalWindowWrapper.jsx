import React from "react";
import { observer } from "mobx-react-lite";

import WindowLoginError from "./WindowLoginError.jsx";
import WindowOpenNoteById from "./WindowOpenNoteById.jsx";
import WindowNoteNotExistError from "./WindowNoteNotExistError.jsx";
import { modalWindowsStore } from "../../../stores/ModalWindowsStore.js";

let ModalWindowWrapper = observer(() => {
    let jsx = [];

    switch (modalWindowsStore.type) {
        case "WindowLoginError":
            jsx.push(<WindowLoginError/>);
            break;
        case "OpenNoteById":
            jsx.push(<WindowOpenNoteById/>);
            break;
        case "ErrorNoteNotExist":
            jsx.push(<WindowNoteNotExistError/>);
            break;
        default:
            jsx.push(<></>);
    }

    return jsx;
  });

export default ModalWindowWrapper;