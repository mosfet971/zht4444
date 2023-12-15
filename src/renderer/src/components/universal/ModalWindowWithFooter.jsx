import React from "react";
import Draggable from 'react-draggable';

let ModalWindowWithFooter = (props) => {
    return (
        <Draggable handle=".draggableHandle" positionOffset={{ x: '-50%', y: '-50%' }}>
            <div
                className="window active is-bright"
                style={{ visibility: "visible", opacity: "unset", userSelect: "none"}}
                role="dialog"
                aria-labelledby="dialog-title"
            >
                <div className="title-bar draggableHandle">
                    <div className="title-bar-text" id="dialog-title">
                        {props.title}
                    </div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" onClick={props.onClose} />
                    </div>
                </div>

                <div className="window-body has-space">
                    {props.children}
                </div>

                <footer style={{textAlign: "right"}}>
                    <button onClick={props.onClose}>OK</button>
                </footer>
            </div>
        </Draggable>
    );
};

export default ModalWindowWithFooter;