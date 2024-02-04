import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";

import MenuTab from "../appTabs/MenuTab.jsx";
import NoteTab from "../appTabs/NoteTab.jsx";

import TabSection from "../../universal/TabSection.jsx";
import TabMenu from "../../universal/TabMenu.jsx";
import TabButton from "../../universal/TabButton.jsx";
import TabPanel from "../../universal/TabPanel.jsx";

let MainPage = observer(() => {
  return (<>
    <TabSection id="mainTabs">
      <TabMenu>
        <TabButton target="menu" isDefaultSelected={true}>Меню</TabButton>
        <TabButton target="favs" isDefaultSelected={false}>Избранное</TabButton>
        <TabButton target="graph" isDefaultSelected={false}>Граф</TabButton>
        <TabButton target="recent" isDefaultSelected={false}>Недавнее</TabButton>
        <TabButton target="search" isDefaultSelected={false}>Поиск</TabButton>
        <TabButton target="readAndWrite" isDefaultSelected={false}>Просмотр и изменение</TabButton>
      </TabMenu>
      <TabPanel isDefaultHidden={false} id="menu"><MenuTab/></TabPanel>
      <TabPanel isDefaultHidden={true} id="favs">Tab B1 is active</TabPanel>
      <TabPanel isDefaultHidden={true} id="graph">Tab B2 is active</TabPanel>
      <TabPanel isDefaultHidden={true} id="recent">Tab B3 is active</TabPanel>
      <TabPanel isDefaultHidden={true} id="search">Tab B4 is active</TabPanel>
      <TabPanel isDefaultHidden={true} id="readAndWrite"><NoteTab/></TabPanel>
    </TabSection>
  </>);
});

export default MainPage;