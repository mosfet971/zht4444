import { makeAutoObservable } from "mobx";

class Test1 {
    value = 1;
    value2 = 1;

    constructor() {
        makeAutoObservable(this);
    }

    incrValue = () => {
        this.value++;
    };

    processValue = async () => {
        this.value2 = await ipcRenderer.invoke("processValue", this.value);
    };
}

export default Test1;