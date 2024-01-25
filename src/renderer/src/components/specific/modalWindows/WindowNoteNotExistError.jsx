import React from "react";
import { observer } from "mobx-react-lite";
import ModalWindowWithFooter from "../../universal/ModalWindowWithFooter.jsx"
import { modalWindowsStore } from "../../../stores/ModalWindowsStore.js";

let WindowNoteNotExistError = observer(() => {
  return (
    <ModalWindowWithFooter title="Ошибка" onClose={modalWindowsStore.close}>
      <p style={{width: "20em", fontSize: "large"}}>Запись не существует</p>
    </ModalWindowWithFooter>
    );
});

export default WindowNoteNotExistError;