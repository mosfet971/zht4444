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
    IconEditOff,
    IconDeviceFloppy
} from '@tabler/icons-react';

import { noteTabStore } from "../../../stores/NoteTabStore.js";

let ControlsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.3em;
    width: calc(100% - (0.3em + 0.3em));
    border-bottom: 0.03em solid #b8b8b8;
    padding-top: 1em;
    padding-bottom: 0.7em;
    padding-left: 0.3em;
    padding-right: 0.3em;

    & > div {
        font-size: 135%;
        min-height: 1.5em;
        max-height: 5em;
    }
`;

let ButtonContentContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
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

    switch (noteTabStore.mode) {
        case "no":
            markup.push(<h2 style={{ margin: "1em" }}>Нет открытой записи</h2>);
            break;
        case "read":
            markup.push(
                <>
                    <ControlsContainer>
                        <ControlButton onClick={noteTabStore.delOpenedNote}>
                            <ButtonContentContainer>
                                <IconTrash />
                                Удалить запись
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={noteTabStore.closeOpenedNote}>
                            <ButtonContentContainer>
                                <IconLogout />
                                Закрыть запись
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={noteTabStore.copyOpenedNoteId}>
                            <ButtonContentContainer>
                                <IconCopy />
                                Копировать идентификатор
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={noteTabStore.startOpenedNoteWriting}>
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
                        <ControlButton onClick={noteTabStore.delOpenedNote}>
                            <ButtonContentContainer>
                                <IconTrash />
                                Удалить запись
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={noteTabStore.closeOpenedNote}>
                            <ButtonContentContainer>
                                <IconLogout />
                                Закрыть запись
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={noteTabStore.copyOpenedNoteId}>
                            <ButtonContentContainer>
                                <IconCopy />
                                Копировать идентификатор
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={noteTabStore.stopOpenedNoteWriting}>
                            <ButtonContentContainer>
                                <IconEditOff />
                                Прекратить изменение записи
                            </ButtonContentContainer>
                        </ControlButton>
                        <ControlButton onClick={noteTabStore.save}>
                            <ButtonContentContainer>
                                <IconDeviceFloppy />
                                Сохранить запись
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