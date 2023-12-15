exports.newDistributor = () => {
    handlers = {};
    return({
        registerHandler: (type, handler) => {handlers[type] = handler;},
        invoke: async (event) => { return (await handlers[event.type]());}
    });
}