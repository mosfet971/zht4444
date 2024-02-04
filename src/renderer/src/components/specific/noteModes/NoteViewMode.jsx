import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import { noteTabStore } from "../../../stores/NoteTabStore";

let NoteViewMode = observer(() => {
    return (
        <p>{noteTabStore.openedNoteId + " read"}</p>
    );
});

export default NoteViewMode;