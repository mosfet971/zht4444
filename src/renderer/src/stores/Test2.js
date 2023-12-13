import { makeAutoObservable } from "mobx";

class Test2 {
    value = "";

    constructor() {
        makeAutoObservable(this);
    }

    setValue = (newValue) => {
        this.value = newValue;
    };
}

export default Test2;