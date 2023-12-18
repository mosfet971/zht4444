import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";

import MenuCard from "../../universal/MenuCard.jsx";

let MenuCardsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

let MenuTab = observer(() => {
    return (
        <MenuCardsContainer>
            <MenuCard text="Создать новую запись" handler={alert}/>
            <MenuCard text="Справочник" handler={alert}/>
            <MenuCard text="Смена пароля" handler={alert}/>
            <MenuCard text="Статус базы данных" handler={alert}/>
            <MenuCard text="Управление шаблонами поиска" handler={alert}/>
            <MenuCard text="Управление шаблонами записей" handler={alert}/>
            <MenuCard text="Слияние баз данных" handler={alert}/>
        </MenuCardsContainer>
    );
});

export default MenuTab;