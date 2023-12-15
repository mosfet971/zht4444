import React from "react";
import { observer } from "mobx-react-lite";
import ButtonTest from "../../test/ButtonTest.jsx";
import InputTest from "../../test/InputTest.jsx";
import TextTest from "../../test/TextTest.jsx";


let MainPage = observer(() => {
    return (<>
      <ButtonTest/>
      <InputTest/>
      <TextTest/>
    </>);
  });

export default MainPage;