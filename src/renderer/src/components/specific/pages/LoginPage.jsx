import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

let LoginForm = styled.div`
  width: 40vw;
  position: fixed;
  top: calc(50vh - 20vh);
  left: calc(50vw - 20vw);
  display: block;
  background-color: #cacaca;
  padding: 2em;
  box-shadow: 0.25em 0.25em 0.5em 0 rgba(34, 60, 80, 0.2);

  &>div>h2 {
    margin-bottom: 0.5em;
  }

  &>div>p {
    margin-bottom: 0.5em;
    font-size: medium;
  }

  &>div {
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 100%;
    z-index: 1;
  }

  &>div>*{
    margin-bottom: 3em;
    grid-row: 2;
  }

  &>div>.line{
    border-top: 0.05em solid #505050;
    height: 0;
    margin-bottom: 2.5em;
    margin-top: 0.5em;
  }

  &>div>button{
    margin-bottom: 0;
    font-size: 120%;
    height: 2em;
    width: 40%;
    align-self: center;
  }
  
  &>div>input {
    font-size: 120%;
    height: 2em;
    align-self: center;
    width: 100%;
  }

`;


let LoginPage = observer(() => {
  return (<LoginForm>
    <div>
      <h2><b>
        Введите пароль
        </b>
        </h2>
        <p>
        Если база данных ещё не созданна, она будет инициализированна с указанным паролем.
        </p>
      
      <div className="line"></div>
      <input
        type="password"
        onInput={(e) => window.stores.loginStore.updatePassword(e.target.value)}
        placeholder="Пароль"
      />
      <button onClick={() => window.stores.loginStore.login()}>Ввод</button>
    </div>
  </LoginForm>);
});

export default LoginPage;