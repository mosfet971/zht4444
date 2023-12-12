import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const Redtext = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: black;

  &:hover {
    display: none;
  }
`;


class Hello extends React.Component {
    render() {
        return <>
        <Redtext>Hello, React</Redtext>
        <button onClick={async ()=>alert(await ipcRenderer.invoke("uga"))}>уга</button>
        </>;
    }
}
ReactDOM.render(
    <Hello/>,
    document.getElementById("reactRoot")
)