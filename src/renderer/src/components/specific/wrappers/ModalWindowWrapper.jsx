import React from "react";
import { observer } from "mobx-react-lite";

import WindowLoginError from "../modalWindows/WindowLoginError.jsx";
import WindowOpenNoteById from "../modalWindows/WindowOpenNoteById.jsx";
import WindowNoteNotExistError from "../modalWindows/WindowNoteNotExistError.jsx";
import { modalWindowsStore } from "../../../stores/ModalWindowsStore.js";

let ModalWindowWrapper = observer(() => {
    let jsx = [];

    switch (modalWindowsStore.type) {
        case "WindowLoginError":
            jsx.push(<WindowLoginError/>);
            break;
        case "WindowOpenNoteById":
            jsx.push(<WindowOpenNoteById/>);
            break;
        case "WindowNoteNotExistError":
            jsx.push(<WindowNoteNotExistError/>);
            break;
        default:
            jsx.push(<></>);
    }

    return jsx;
  });

export default ModalWindowWrapper;