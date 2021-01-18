import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("remove expense", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
});

test("edit expense", () => {
    const obj = { description: 111 };
    const action = editExpense("123abc", obj);
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        expense: obj,
    });
});
