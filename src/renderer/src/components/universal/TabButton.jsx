import React from "react";
import styled from "styled-components";


let TabButton = (props) => {
    return (
        <button style={{userSelect: "none"}} role="tab" aria-controls={props.target} aria-selected={props.isDefaultSelected.toString()}>{props.children}</button>
    );
};

export default TabButton;