import { observer } from "mobx-react-lite";
import React from "react";

let InputTest = observer(() => {
  return (<>
    <input onInput={async (e) => window.stores.test2.setValue(e.target.value)}/>
  </>);
});

export default InputTest;