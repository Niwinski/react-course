import { createStore, combineReducers } from "redux";
import { expensesReducer, filterReducers } from "../reducers/reducers.js";

export default () => {
    const store = createStore(
        combineReducers({ expenses: expensesReducer, filters: filterReducers }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
