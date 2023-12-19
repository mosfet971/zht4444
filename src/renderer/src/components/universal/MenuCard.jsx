import React from "react";
import styled from "styled-components";

let MenuCardDiv = styled.div`
    background-color: #e9e9e9;
    width: 7em;
    height: 4em;
    text-align: center;
    padding: 1em;
    box-shadow: 0.25em 0.25em 0.5em 0 rgba(34, 60, 80, 0.2);
    margin: calc(1em + 0.03em);
    font-size: 200%;
    transition-property: color, background-color; 
    transition-duration: 0.1s;
    user-select: none;
    border: #8f8f8f 0.01em solid;

    &:hover {
        background-color: #dddddd;
    }

    &:active {
        background-color: #c7c7c7;
    }
`;

let MenuCard = (props) => {
    return (
        <MenuCardDiv onClick={props.handler}>
            {props.children}
        </MenuCardDiv>
    );
};

export default MenuCard;