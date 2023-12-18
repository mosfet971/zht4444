import ModalWindowStore from "./ModalWindowStore";
import LoginStore from "./LoginStore";
import TabStore from "./TabStore";

export const storesReg = () => {
    window.stores = {
        modalWindowStore: new ModalWindowStore(),
        loginStore: new LoginStore(),
        tabStore: new TabStore()
    };
};
