import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ModalWindow from "../../universal/ModalWindow.jsx"
import styled from "styled-components";

let Form = styled.div`
  position: relative;
  width: 100%;
  height: 2em;
  top: -5%;
  &>input {
    bottom: 0;
    left:0;
    width: 60%;
    height: 100%;
  }
  &>button {
    bottom: -5%;
    right: -2%;
    width: 25%;
    height: 90%;
  }
`;

let WindowOpenNoteById = observer(() => {
  useEffect(() => {
    window.stores.windowOpenNoteByIdStore.reset();
  }, []);
  
  return (
    <ModalWindow title="Открытие записи" onClose={window.stores.modalWindowStore.close}>
      <p style={{ width: "20em", fontSize: "large" }}>Введите идентификатор записи:</p>
      <Form>
        <input type="text" onInput={window.stores.windowOpenNoteByIdStore.idInputOninputHandler} placeholder="идентификатор" />
        <button onClick={window.stores.windowOpenNoteByIdStore.submit}>Открыть</button>
      </Form>
    </ModalWindow>
  );
});

export default WindowOpenNoteById;