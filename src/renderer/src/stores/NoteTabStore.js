import { makeAutoObservable } from "mobx";

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
            await window.stores.tabStore.openTab("readAndWrite");
        } else {
            await window.stores.modalWindowStore.open("ErrorNoteNotExist");
        }
    };

    delOpenedNote = async () => {
        await ipcRenderer.invoke("delNote", this.openedNoteId);
        this.openedNoteId = "-";
        this.mode = "no";
    };

    createNewNoteAndOpenForWriting = async () => {
        await window.stores.tabStore.openTab("readAndWrite");
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

}

export default NoteTabStore;