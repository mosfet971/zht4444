import React from "react";
import { observer } from "mobx-react-lite";
import ButtonTest from "../../test/ButtonTest.jsx";
import InputTest from "../../test/InputTest.jsx";
import TextTest from "../../test/TextTest.jsx";
import { useEffect } from "react";
import styled from "styled-components";

let Tabpanel = styled.article`
  width: 100vw;
  height: calc(100vh - 1.5em);
`;

let MainPage = observer(() => {
  useEffect(() => {
    window.stores.tabStore.init();
  }, []);

  return (<>
    <section class="tabs" style={{marginTop: "1.5em", zIndex: 10}}>
      <menu role="tablist" aria-label="tabsMenu">
        <button role="tab" aria-controls="menu" aria-selected="true">Меню</button>
        <button role="tab" aria-controls="favs">Избранное</button>
        <button role="tab" aria-controls="graph">Граф</button>
        <button role="tab" aria-controls="search">Поиск</button>
        <button role="tab" aria-controls="readAndWrite">Просмотр и изменение</button>
      </menu>
      <Tabpanel role="tabpanel" id="menu">Tab A is active</Tabpanel>
      <Tabpanel role="tabpanel" id="favs" hidden>Tab B is active</Tabpanel>
      <Tabpanel role="tabpanel" id="graph" hidden>Tab C is active</Tabpanel>
      <Tabpanel role="tabpanel" id="search" hidden>Tab C is active</Tabpanel>
      <Tabpanel role="tabpanel" id="readAndWrite" hidden>Tab D is inactive</Tabpanel>
    </section>
  </>);
});

export default MainPage;