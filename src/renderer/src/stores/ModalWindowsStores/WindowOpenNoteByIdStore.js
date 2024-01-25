import { makeAutoObservable } from "mobx";
import { modalWindowsStore } from "../ModalWindowsStore";
import { noteTabStore } from "../NoteTabStore";

class WindowOpenNoteByIdStore {
    constructor() {
        makeAutoObservable(this);
    }

    noteId = "";

    idInputOninputHandler = async (e) => {
        this.noteId = e.target.value;
    };

    submit = async () => {
        modalWindowsStore.close();
        noteTabStore.openNote(this.noteId);
    };
    
    reset = async () => {
        this.noteId = "";
    };
    
}

export const windowOpenNoteByIdStore = new WindowOpenNoteByIdStore();