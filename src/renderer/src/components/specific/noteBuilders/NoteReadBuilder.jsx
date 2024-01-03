import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";

let NoteReadBuilder = observer(() => {
    return (
        <p>{window.stores.noteTabStore.openedNoteId + " read"}</p>
    );
});

export default NoteReadBuilder;