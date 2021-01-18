// export default (expenses, { text, sortBy, startDate: start, endDate: end }) => {
//     return expenses
//         .filter((i) => {
//             const startDate = start == undefined || i.createdAt >= start;
//             const endDate = end == undefined || i.createdAt <= end;
//             // const startDate = true;
//             // const endDate = true;
//             const textMatch =
//                 text == "" ||
//                 i.description.toLowerCase().indexOf(text.toLowerCase()) >= 0;
//             return startDate && endDate && textMatch;
//         })
//         .sort((a, b) => {
//             if (sortBy == "date") {
//                 return a.createdAt < b.createdAt ? 1 : -1;
//             } else {
//                 return a.amount < b.amount ? 1 : -1;
//             }
//         });
// };
import moment from "moment";

import selectExpenses from "../../selectors/expenses";

const expenses = [
    {
        id: "1",
        description: "Gum",
        note: "",
        amount: 195,
        createdAt: 0,
    },
    {
        id: "2",
        description: "Rent",
        note: "",
        amount: 109500,
        createdAt: moment(0).subtract(4, "days").valueOf(),
    },
    {
        id: "3",
        description: "Credit Card",
        note: "",
        amount: 4500,
        createdAt: moment(0).add(4, "days").valueOf(),
    },
];

test("filter by text", () => {
    const filters = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]]);
});

test("filter by start date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(5000),
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2]]);
});
