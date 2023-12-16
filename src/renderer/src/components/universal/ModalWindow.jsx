import React from "react";
import Draggable from 'react-draggable';

let ModalWindow = (props) => {
    return (
        <Draggable handle=".draggableHandle" positionOffset={{ x: '-50%', y: '-50%' }}>
            <div
                className="window active is-bright glass"
                style={{ visibility: "visible", opacity: "unset", userSelect: "none", zoom: "1.01" }}
                role="dialog"
                aria-labelledby="dialog-title"
            >
                <div className="title-bar draggableHandle">
                    <div className="title-bar-text" id="dialog-title" style={{color: "black"}}>
                        {props.title}
                    </div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" onClick={props.onClose}  />
                    </div>
                </div>

                <div className="window-body has-space">
                    {props.children}
                </div>

            </div>
        </Draggable>
    );
};

export default ModalWindow;