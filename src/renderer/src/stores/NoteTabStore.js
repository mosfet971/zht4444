import { makeAutoObservable } from "mobx";
import { modalWindowsManagerStore } from "./ModalWindowsManagerStore";
import { tabsManagerStore } from "./TabsManagerStore";

class NoteTabStore {
    constructor() {
        makeAutoObservable(this);
    }

    mode = "no"; // ["no", "view", "edit"]
    openedNoteId = "-";

    openNote = async (noteId) => {
        if (await ipcRenderer.invoke("isNoteExist", noteId)) {
            this.openedNoteId = noteId;
            this.mode = "view";
            await tabsManagerStore.openTab("mainTabs", "readAndWrite");
        } else {
            await modalWindowsManagerStore.open("WindowNoteNotExistError");
        }
    };

    delOpenedNote = async () => {
        await ipcRenderer.invoke("delEntity", this.openedNoteId);
        this.openedNoteId = "-";
        this.mode = "no";
    };

    createNewNoteAndOpenForWriting = async () => {
        await tabsManagerStore.openTab("mainTabs", "readAndWrite");
        this.openedNoteId = await ipcRenderer.invoke("createNewNoteAndGetId");
        this.mode = "edit";
    };

    closeOpenedNote = async () => {
        this.openedNoteId = "-";
        this.mode = "no";
    };

    startOpenedNoteWriting = async () => {
        this.mode = "edit";
    };

    stopOpenedNoteWriting = async () => {
        this.mode = "view";
    };

    copyOpenedNoteId = async () => {
        await navigator.clipboard.writeText(this.openedNoteId);
    };

    save = async () => {
        await this.stopOpenedNoteWriting();
    };

}

export const noteTabStore = new NoteTabStore();