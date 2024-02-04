import React from "react";
import { observer } from "mobx-react-lite";
import ModalWindowWithFooter from "../../universal/ModalWindowWithFooter.jsx"
import { modalWindowsManagerStore } from "../../../stores/ModalWindowsManagerStore.js";

let WindowNoteNotExistError = observer(() => {
  return (
    <ModalWindowWithFooter title="Ошибка" onClose={modalWindowsManagerStore.close}>
      <p style={{width: "20em", fontSize: "large"}}>Запись не существует</p>
    </ModalWindowWithFooter>
    );
});

export default WindowNoteNotExistError;