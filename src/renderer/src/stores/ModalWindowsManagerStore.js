import { makeAutoObservable } from "mobx";

class ModalWindowsManagerStore {
    constructor() {
        makeAutoObservable(this);
    }

    isOpened = false;
    type = "-";

    close = () => {
        this.isOpened = false;
        this.type = "-";
    };

    open = (type) => {
        this.isOpened = true;
        this.type = type;
    };
}

export const modalWindowsManagerStore = new ModalWindowsManagerStore();