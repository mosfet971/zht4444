import { makeAutoObservable } from "mobx";

class WindowOpenNoteByIdStore {
    constructor() {
        makeAutoObservable(this);
    }

    noteId = "";

    idInputOninputHandler = async (e) => {
        this.noteId = e.target.value;
    };

    submit = async () => {
        await window.stores.modalWindowStore.close();
        await window.stores.noteTabStore.openNote(this.noteId);
    };
    
    reset = async () => {
        this.noteId = "";
    };
    
}

export default WindowOpenNoteByIdStore;