
exports.newConveyor = () => {
    let processors = [];
    return {
        addProcessor: (p) => {processors.push(p)},
        process: async (inp) => {
            let temp = inp; 
            for (let i of processors) {
                temp = await i(temp);
            } 
            return temp; 
        }
    }
}