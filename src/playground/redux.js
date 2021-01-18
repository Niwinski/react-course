import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";
// ADD_EXPENSE
const addExpense = ({
    description = " ",
    note = "",
    amount = 0,
    createdAt = 0,
} = param) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt,
    },
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id,
});
// EDIT_EXPENSE
const editExpense = (id, expense = {}) => ({
    type: "EDIT_EXPENSE",
    id,
    expense,
});

// SET_TEXT_FILTER
const setTextFilter = (val = "") => ({
    type: "SET_TEXT_FILTER",
    val,
});

// SORT_BY_STATE
// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
const sortByAmount = (val = "") => ({
    type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
const setStartDate = (date = undefined) => ({
    type: "SET_START_DATE",
    date,
});
// SET_END_DATE
const setEndDate = (date = undefined) => ({
    type: "SET_END_DATE",
    date,
});

const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
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

        default:
            return state;
    }
};

const filtersReducerDefault = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
};

const filterReducers = (state = filtersReducerDefault, action) => {
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

const getVisibleExpenses = (
    expenses,
    { text, sortBy, startDate: start, endDate: end }
) => {
    return expenses
        .filter((i) => {
            const startDate = start == undefined || i.createdAt >= start;
            const endDate = end == undefined || i.createdAt <= end;
            const textMatch =
                text == "" ||
                i.description.toLowerCase.indexOf(text.toLowerCase()) >= 0;
            return startDate && endDate && textMatch;
        })
        .sort((a, b) => {
            if (sortBy == "date") {
                return a.createdAt < b.createdAt ? -1 : 1;
            } else {
                return a.amount < b.amount ? 1 : -1;
            }
        });
};

const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filterReducers })
);
store.subscribe(() => {
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
});

const e1 = store.dispatch(
    addExpense({ description: "rent", amount: 95000, createdAt: 1000 })
);
const e2 = store.dispatch(
    addExpense({ description: "coffee", amount: 900, createdAt: -1000 })
);
const e3 = store.dispatch(
    addExpense({ description: "mcds", amount: 900, createdAt: 12 })
);

// const r1 = store.dispatch(removeExpense({ id: e1.expense.id }));
// const d1 = store.dispatch(editExpense(e2.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(15));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [
        {
            id: "dsaf",
            description: "foo",
            note: "nice note",
            amount: 54500,
            createdAt: 0,
        },
    ],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
    },
};
