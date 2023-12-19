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
    IconZoomScan
} from '@tabler/icons-react';

let MenuCardsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

let MenuTab = observer(() => {
    return (
        <MenuCardsContainer>
            <MenuCard handler={alert}>
                <IconFilePlus/><br/>
                Создать новую запись
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
                Управление шаблонами записей
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