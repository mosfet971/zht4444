import Test1 from "./test1";
import Test2 from "./test2";

export const storesReg = () => {
    window.stores = {
        test1: new Test1(),
        test2: new Test2()
    };
};
