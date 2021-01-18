// SET_TEXT_FILTER
export const setTextFilter = (val = "") => ({
    type: "SET_TEXT_FILTER",
    val,
});

// SORT_BY_STATE
// SORT_BY_DATE
export const sortByDate = () => ({
    type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
export const setStartDate = (date = undefined) => ({
    type: "SET_START_DATE",
    date,
});
// SET_END_DATE
export const setEndDate = (date = undefined) => ({
    type: "SET_END_DATE",
    date,
});
