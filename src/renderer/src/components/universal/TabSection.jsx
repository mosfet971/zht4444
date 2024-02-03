import React from "react";
import styled from "styled-components";

import { useEffect } from "react";

let TabSection = (props) => {
    useEffect(() => {
        let buttons = document.querySelectorAll("#" + props.id + ">menu>button");
        let panels = document.querySelectorAll("#" + props.id + ">article");

        let buttonsAndHandlers = [];

        buttons.forEach((i)=>{
            let handler = (e) => {
                buttons.forEach((t)=>{
                    t.setAttribute("aria-selected", "false");
                });

                i.setAttribute("aria-selected", "true");

                panels.forEach((j)=>{
                    j.setAttribute("hidden", true);
                    if(j.getAttribute("id") == i.getAttribute("aria-controls")) {
                        j.removeAttribute("hidden");
                    }
                });
            }

            i.addEventListener("click", handler);

            buttonsAndHandlers.push({button: i, handler: handler});
        });

        return () => {
            buttonsAndHandlers.forEach((i)=> {
                i.button.removeEventListener("click", i.handler);
            });
        };
    }, []);

    return (
        <section class="tabs" id={props.id} style={{marginTop: "1.5em", zIndex: 10}}>{props.children}</section>
    );
};

export default TabSection;