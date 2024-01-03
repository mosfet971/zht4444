import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";

let NoteWriteBuilder = observer(() => {
    return (
        <p>{window.stores.noteTabStore.openedNoteId + " write"}</p>
    );
});

export default NoteWriteBuilder;