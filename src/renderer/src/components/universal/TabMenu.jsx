import React from "react";
import styled from "styled-components";

let TabMenuMenu = styled.menu`
  height: 2em;
`;

let TabMenu = (props) => {
    return (
        <TabMenuMenu role="tablist" aria-label="tabsMenu">{props.children}</TabMenuMenu>
    );
};

export default TabMenu;