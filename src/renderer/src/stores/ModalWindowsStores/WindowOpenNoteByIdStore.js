import { makeAutoObservable } from "mobx";
import { modalWindowsManagerStore } from "../ModalWindowsManagerStore";
import { noteTabStore } from "../NoteTabStore";

class WindowOpenNoteByIdStore {
    constructor() {
        makeAutoObservable(this);
    }

    noteId = "";

    idInputOninputHandler = async (e) => {
        e.preventDefault();
        this.noteId = e.target.value;
    };

    submit = async () => {
        modalWindowsManagerStore.close();
        noteTabStore.openNote(this.noteId);
    };
    
    reset = async () => {
        this.noteId = "";
    };
    
}

export const windowOpenNoteByIdStore = new WindowOpenNoteByIdStore();