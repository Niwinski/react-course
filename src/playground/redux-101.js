console.log("101");

const { createStore } = require("redux");

const increment = (d = 1) => ({ type: "INCREMENT", inc: d });
const decrement = (d = 1) => ({ type: "DECREMENT", inc: d });
const reset = () => ({ type: "RESET" });
const setTo = (d = 0) => ({ type: "SET", inc: d });

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "DECREMENT":
            return { count: state.count - action.inc };

        case "INCREMENT":
            return { count: state.count + action.inc };

        case "RESET":
            return { count: 0 };
        case "SET":
            return { count: action.inc };
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment(5));
store.dispatch(increment());
store.dispatch(increment(-5));
store.dispatch(reset());
store.dispatch(setTo(101));
