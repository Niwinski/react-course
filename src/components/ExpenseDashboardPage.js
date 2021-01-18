import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFliters from "./ExpenseFilters";

export const ExpenseDashboardPage = () => (
    <div>
        <p>This is the edp component </p>
        <ExpenseFliters />
        <ExpenseList />
    </div>
);
