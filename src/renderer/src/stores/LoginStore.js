import { makeAutoObservable } from "mobx";
import { modalWindowsStore } from "./ModalWindowsStore";

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
            modalWindowsStore.close();
        } else {
            this.isLogined = false;
            modalWindowsStore.open("WindowLoginError");
        }
    };

    updatePassword = (password) => {
        this.password = password;
        modalWindowsStore.close();
    };
}

export const loginStore = new LoginStore();