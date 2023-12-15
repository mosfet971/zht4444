import { makeAutoObservable } from "mobx";

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
            window.stores.modalWindowStore.close();
        } else {
            this.isLogined = false;
            window.stores.modalWindowStore.open("WindowLoginError");
        }
    };

    updatePassword = (password) => {
        this.password = password;
        window.stores.modalWindowStore.close();
    };
}

export default LoginStore;