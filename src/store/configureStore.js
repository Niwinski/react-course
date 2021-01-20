import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { expensesReducer, filterReducers } from "../reducers/reducers.js";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({ expenses: expensesReducer, filters: filterReducers }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
