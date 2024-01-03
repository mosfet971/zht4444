import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import MenuCard from "../../universal/MenuCard.jsx";

import { 
    IconFilePlus, 
    IconHelp,
    IconLock,
    IconReportAnalytics,
    IconSettingsSearch,
    IconSettingsCode,
    IconArrowMerge,
    IconZoomScan,
    IconFileSymlink
} from '@tabler/icons-react';

let MenuCardsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

let MenuTab = observer(() => {
    return (
        <MenuCardsContainer>
            <MenuCard handler={window.stores.noteTabStore.createNewNoteAndOpenForWriting}>
                <IconFilePlus/><br/>
                Создать новую запись
            </MenuCard>
            <MenuCard handler={async ()=>{
                await window.stores.modalWindowStore.open("OpenNoteById");
            }}>
                <IconFileSymlink/><br/>
                Открыть запись по id
            </MenuCard>
            <MenuCard handler={alert}>
                <IconHelp/><br/>
                Справочник
            </MenuCard>
            <MenuCard handler={alert}>
                <IconLock/><br/>
                Смена пароля
            </MenuCard>
            <MenuCard handler={alert}>
                <IconReportAnalytics/><br/>
                Статус базы данных
            </MenuCard>
            <MenuCard handler={alert}>
                <IconSettingsSearch/><br/>
                Управление шаблонами поиска
            </MenuCard>
            <MenuCard handler={alert}>
                <IconSettingsCode/><br/>
                Управление HTML вставками
            </MenuCard>
            <MenuCard handler={alert}>
                <IconArrowMerge/><br/>
                Слияние баз данных
            </MenuCard>
            <MenuCard handler={alert}>
                <IconZoomScan /><br/>
                Управление параметрами и тегами
            </MenuCard>
        </MenuCardsContainer>
    );
});

export default MenuTab;