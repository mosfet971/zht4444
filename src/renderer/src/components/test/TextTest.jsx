import { observer } from "mobx-react-lite";
import styled from "styled-components";
import React from "react";
import { useEffect } from "react";

const Redtext = styled.h1`
  margin-top: 100px;
  color: red;
`;

let TextTest = observer(() => {
  useEffect(() => {
    window.stores.test1.processValue();
  }, [window.stores.test1.value]);

  return (<>
        <Redtext>{window.stores.test1.value2 + window.stores.test2.value}</Redtext>
  </>);
});

export default TextTest;