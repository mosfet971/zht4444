import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import NoteReadBuilder from "../noteBuilders/NoteReadBuilder.jsx";
import NoteWriteBuilder from "../noteBuilders/NoteWriteBuilder.jsx";

import {
    IconTrash,
    IconLogout,
    IconCopy,
    IconEdit,
    IconEditOff
} from '@tabler/icons-react';

let ControlsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.3em;
    width: 100%;
    border-bottom: 0.03em solid #b8b8b8;
    padding-top: 1em;
    padding-bottom: 0.7em;

    & > div {
        font-size: 135%;
        min-height: 1.5em;
        max-height: 5em;
    }
`;

let ButtonContentContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.25em;
    align-items: center;

    & > * {
        height: 100%;
        align-self: center;
    }
`;

let ControlButton = styled.div`
    padding: 0.4em;
    background-color: #ebebeb;
    transition: background-color 150ms 50ms;
    border: #a8a8a8 0.1em solid;
    user-select: none;

    &:hover {
        background-color: #d8d8d8;
    }

    &:active {
        background-color: #a8a8a8;
    }
`;

let NoteTab = observer(() => {
    let markup = [];

    switch (window.stores.noteTabStore.mode) {
        case "no":
            markup.push(<h2 style={{ margin: "1em" }}>Нет открытой записи</h2>);
            break;
        case "read":
            markup.push(
                <>
                    <ControlsContainer>
                        <ControlButton onClick={window.stores.noteTabStore.delOpenedNote}>
                            <ButtonContentContainer>
                                <IconTrash />
                                Удалить запись
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={window.stores.noteTabStore.closeOpenedNote}>
                            <ButtonContentContainer>
                                <IconLogout />
                                Закрыть запись
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={window.stores.noteTabStore.copyOpenedNoteId}>
                            <ButtonContentContainer>
                                <IconCopy />
                                Копировать идентификатор
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={window.stores.noteTabStore.startOpenedNoteWriting}>
                            <ButtonContentContainer>
                                <IconEdit />
                                Изменить запись
                            </ButtonContentContainer>
                        </ControlButton>
                    </ControlsContainer>
                    <NoteReadBuilder />
                </>
            );
            break;
        case "write":
            markup.push(
                <>
                    <ControlsContainer>
                        <ControlButton onClick={window.stores.noteTabStore.delOpenedNote}>
                            <ButtonContentContainer>
                                <IconTrash />
                                Удалить запись
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={window.stores.noteTabStore.closeOpenedNote}>
                            <ButtonContentContainer>
                                <IconLogout />
                                Закрыть запись
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={window.stores.noteTabStore.copyOpenedNoteId}>
                            <ButtonContentContainer>
                                <IconCopy />
                                Копировать идентификатор
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={window.stores.noteTabStore.stopOpenedNoteWriting}>
                            <ButtonContentContainer>
                                <IconEditOff />
                                Прекратить изменение записи
                            </ButtonContentContainer>
                        </ControlButton>
                    </ControlsContainer>
                    <NoteWriteBuilder />
                </>
            );
            break;
        default:
            markup = <></>;
    }

    return markup;
});

export default NoteTab;