import React from "react";
import styled from "styled-components";

let TabPanelMainArticle = styled.article`
  width: 100vw;
  height: calc(100vh - (1.5em + 2em));
  overflow-y: auto !important;
  padding: 0;
`;

let TabPanel = (props) => {
    if (props.isDefaultHidden) {
        return (
            <TabPanelMainArticle style={props.style} role="tabpanel" className="has-scrollbar" id={props.id} hidden>{props.children}</TabPanelMainArticle>
        );
    } else {
        return (
            <TabPanelMainArticle style={props.style} role="tabpanel" className="has-scrollbar" id={props.id}>{props.children}</TabPanelMainArticle>
        );
    }
};

export default TabPanel;