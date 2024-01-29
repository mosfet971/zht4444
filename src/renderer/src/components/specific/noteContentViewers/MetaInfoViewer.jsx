import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import { noteTabStore } from "../../../stores/NoteTabStore";

let NoteReadBuilder = observer(() => {
    useEffect(() => {
        effect
        return () => {
            cleanup
        };
    }, [input]);
    
    return (
        <p>{noteTabStore.openedNoteId + " read"}</p>
    );
});

export default NoteReadBuilder;