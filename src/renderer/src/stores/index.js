import ModalWindowStore from "./ModalWindowStore";
import LoginStore from "./LoginStore";
import TabStore from "./TabStore";
import HistoryStore from "./historyStore";
import NoteTabStore from "./NoteTabStore";
import WindowOpenNoteByIdStore from "./ModalWindowsStores/WindowOpenNoteByIdStore";

export const storesInit = () => {
    window.stores = {
        modalWindowStore: new ModalWindowStore(),
        loginStore: new LoginStore(),
        tabStore: new TabStore(),
        noteTabStore: new NoteTabStore(),
        historyStore: new HistoryStore(),
        windowOpenNoteByIdStore: new WindowOpenNoteByIdStore()
    };
};
