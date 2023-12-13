import { observer } from "mobx-react-lite";
import React from "react";

let ButtonTest = observer(() => {
  return (<>
    <button onClick={async () => window.stores.test1.incrValue()}>уга</button>
  </>);
});

export default ButtonTest;