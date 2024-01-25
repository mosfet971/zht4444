import { makeAutoObservable } from "mobx";

class HistoryStore {
    constructor() {
        makeAutoObservable(this);
    }


    
}

export const historyStore = new HistoryStore();