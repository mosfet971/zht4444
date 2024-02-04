import { makeAutoObservable } from "mobx";
import { modalWindowsManagerStore } from "./ModalWindowsManagerStore";

class LoginStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLogined = false;
    password = "";

    login = async () => {
        let isOk = await ipcRenderer.invoke("login", this.password);
        if(isOk) {
            this.isLogined = true;
            modalWindowsManagerStore.close();
        } else {
            this.isLogined = false;
            modalWindowsManagerStore.open("WindowLoginError");
        }
    };

    updatePassword = (password) => {
        this.password = password;
        modalWindowsManagerStore.close();
    };
}

export const loginStore = new LoginStore();