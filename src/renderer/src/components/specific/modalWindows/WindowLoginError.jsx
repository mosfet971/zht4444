import React from "react";
import { observer } from "mobx-react-lite";
import ModalWindowWithFooter from "../../universal/ModalWindowWithFooter.jsx"

let WindowLoginError = observer(() => {
  return (
    <ModalWindowWithFooter title="Ошибка" onClose={()=>window.stores.modalWindowStore.close() }>
      <p style={{width: "20em", fontSize: "large"}}>Введен неверный пароль</p>
    </ModalWindowWithFooter>
    );
});

export default WindowLoginError;