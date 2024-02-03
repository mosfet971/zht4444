import { makeAutoObservable } from "mobx";

class TabManagerStore {
    constructor() {
        makeAutoObservable(this);
    }

    openTab = async (tabSectionId, tabId) => {
        let buttons = document.querySelectorAll("#" + tabSectionId + ">menu>button");
        let panels = document.querySelectorAll("#" + tabSectionId + ">article");

        buttons.forEach((i)=>{
            if (i.getAttribute("aria-controls") == tabId) {
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
        });
    }
}

export const tabManagerStore = new TabManagerStore();