import React from "react";
import { observer } from "mobx-react-lite";

let LoginPage = observer(() => {
    return (<>
      <input type="password" onInput={(e)=>window.stores.loginStore.updatePassword(e.target.value) }/>
      <button onClick={()=>window.stores.loginStore.login() }>Подтвердить</button>
    </>);
  });

export default LoginPage;