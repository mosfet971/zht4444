import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";

import MenuTab from "../tabs/MenuTab.jsx";
import NoteTab from "../tabs/NoteTab.jsx";

let Tabpanel = styled.article`
  width: 100vw;
  height: calc(100vh - (1.5em + 2em));
  overflow-y: auto !important;
  padding: 0;
`;

let TabButton = styled.button`
  user-select: none;
`;

let TabMenu = styled.menu`
  height: 2em;
`;

let MainPage = observer(() => {
  useEffect(() => {
    window.stores.tabStore.init();
  }, []);

  return (<>
    <section class="tabs" style={{marginTop: "1.5em", zIndex: 10}}>
      <TabMenu role="tablist" aria-label="tabsMenu">
        <TabButton role="tab" aria-controls="menu" aria-selected="true">Меню</TabButton>
        <TabButton role="tab" aria-controls="favs">Избранное</TabButton>
        <TabButton role="tab" aria-controls="graph">Граф</TabButton>
        <TabButton role="tab" aria-controls="recent">Недавнее</TabButton>
        <TabButton role="tab" aria-controls="search">Поиск</TabButton>
        <TabButton role="tab" aria-controls="readAndWrite">Просмотр и изменение</TabButton>
      </TabMenu>
      <Tabpanel role="tabpanel" className="has-scrollbar" id="menu"><MenuTab/></Tabpanel>
      <Tabpanel role="tabpanel" className="has-scrollbar" id="favs" hidden>Tab B is active</Tabpanel>
      <Tabpanel role="tabpanel" className="has-scrollbar" id="graph" hidden>Tab C1 is active</Tabpanel>
      <Tabpanel role="tabpanel" className="has-scrollbar" id="recent" hidden>Tab C2 is active</Tabpanel>
      <Tabpanel role="tabpanel" className="has-scrollbar" id="search" hidden>Tab C3 is active</Tabpanel>
      <Tabpanel role="tabpanel" className="has-scrollbar" id="readAndWrite" hidden><NoteTab/></Tabpanel>
    </section>
  </>);
});

export default MainPage;