import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import { noteTabStore } from "../../../stores/NoteTabStore";

import TabSection from "../../universal/TabSection.jsx";
import TabMenu from "../../universal/TabMenu.jsx";
import TabButton from "../../universal/TabButton.jsx";
import TabPanel from "../../universal/TabPanel.jsx";


let NoteWriteBuilder = observer(() => {
    return (<>
        <TabSection id="noteWriteTabs">
            <TabMenu>
                <TabButton target="data" isDefaultSelected={true}>Данные</TabButton>
                <TabButton target="text" isDefaultSelected={false}>Текст</TabButton>
            </TabMenu>
            <TabPanel style={{margin: "0", padding: "0", height: "calc(100vh - 11.5em - 20px)", width: "auto"}} isDefaultHidden={false} id="data">adasd</TabPanel>
            <TabPanel style={{margin: "0", padding: "0", height: "calc(100vh - 11.5em - 20px)", width: "auto"}} isDefaultHidden={true} id="text">22222</TabPanel>
        </TabSection>
    </>);
});

export default NoteWriteBuilder;