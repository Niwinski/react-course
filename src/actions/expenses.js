import { add } from "numeral";
import { v4 as uuidv4 } from "uuid";
import database from "../firebase/firebase";
import expenses from "../selectors/expenses";

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense,
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = " ",
            note = "",
            amount = 0,
            createdAt = 0,
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database
            .ref(`users/${uid}/expenses`)
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({ id: ref.key, ...expense }));
            });
    };
};
// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id,
});

export const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
            .ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then((ref) => {
                dispatch(removeExpense({ id }));
            });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, expense) => ({
    type: "EDIT_EXPENSE",
    id,
    expense,
});

export const startEditExpense = (id, expense = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
            .ref(`users/${uid}/expenses/${id}`)
            .update(expense)
            .then((ref) => {
                dispatch(editExpense(id, expense));
            });
    };
};

// EDIT_EXPENSE
const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses,
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
            .ref(`users/${uid}/expenses`)
            .once("value")
            .then((snapshot) => {
                const expenses = [];

                snapshot.forEach((item) => {
                    expenses.push({ ...item.val(), id: item.key });
                });
                console.log(expenses);
                dispatch(setExpenses(expenses));
            });
    };
};
