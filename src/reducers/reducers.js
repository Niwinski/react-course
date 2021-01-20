import moment from "moment";

const expensesReducerDefault = [];
export const expensesReducer = (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter((i) => i.id !== action.id);
        // const idx = state.findIndex((i) => i.id == action.id);
        // return state.splice(idx, 1);
        case "EDIT_EXPENSE":
            return state.map((i) => {
                if (i.id == action.id) {
                    return { ...i, ...action.expense };
                } else {
                    return i;
                }
            });
        case "SET_EXPENSES":
            return action.expenses;
        default:
            return state;
    }
};
const filtersReducerDefault = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
};

export const filterReducers = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return { ...state, text: action.val };
            break;
        case "SORT_BY_DATE":
            return { ...state, sortBy: "date" };
            break;
        case "SORT_BY_AMOUNT":
            return { ...state, sortBy: "amount" };
            break;
        case "SET_START_DATE":
            return { ...state, startDate: action.date };
            break;
        case "SET_END_DATE":
            return { ...state, endDate: action.date };
            break;

        default:
            return state;
            break;
    }
};
