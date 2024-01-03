import { makeAutoObservable } from "mobx";

class HistoryStore {
    constructor() {
        makeAutoObservable(this);
    }


    
}

export default HistoryStore;