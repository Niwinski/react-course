import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { expensesReducer, filterReducers } from "../reducers/reducers.js";
import authReducer from "../reducers/auth.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducers,
            auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
