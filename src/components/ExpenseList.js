import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => {
    return (
        <div>
            {props.expenses.map((i) => (
                <ExpenseItem key={i.id} {...i} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { expenses: selectExpenses(state.expenses, state.filters) };
    // return { expenses: state.expenses, filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseList);
