import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import { noteTabStore } from "../../../stores/NoteTabStore";

let NoteWriteBuilder = observer(() => {
    return (
        <p>{noteTabStore.openedNoteId + " write"}</p>
    );
});

export default NoteWriteBuilder;