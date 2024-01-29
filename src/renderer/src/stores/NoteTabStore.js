import { makeAutoObservable } from "mobx";
import { modalWindowsStore } from "./ModalWindowsStore";
import { tabStore } from "./TabStore";

class NoteTabStore {
    constructor() {
        makeAutoObservable(this);
    }

    mode = "no"; // ["no", "read", "write"]
    openedNoteId = "-";

    openNote = async (noteId) => {
        if (await ipcRenderer.invoke("isNoteExist", noteId)) {
            this.openedNoteId = noteId;
            this.mode = "read";
            await tabStore.openTab("readAndWrite");
        } else {
            await modalWindowsStore.open("WindowNoteNotExistError");
        }
    };

    delOpenedNote = async () => {
        await ipcRenderer.invoke("delEntity", this.openedNoteId);
        this.openedNoteId = "-";
        this.mode = "no";
    };

    createNewNoteAndOpenForWriting = async () => {
        await tabStore.openTab("readAndWrite");
        this.openedNoteId = await ipcRenderer.invoke("createNewNoteAndGetId");
        this.mode = "write";
    };

    closeOpenedNote = async () => {
        this.openedNoteId = "-";
        this.mode = "no";
    };

    startOpenedNoteWriting = async () => {
        this.mode = "write";
    };

    stopOpenedNoteWriting = async () => {
        this.mode = "read";
    };

    copyOpenedNoteId = async () => {
        await navigator.clipboard.writeText(this.openedNoteId);
    };

    save = async () => {
        await this.stopOpenedNoteWriting();
    };

}

export const noteTabStore = new NoteTabStore();