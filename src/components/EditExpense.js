import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                onSubmit={(e) => {
                    props.dispatch(startEditExpense(props.expense.id, e));
                    props.history.push("/dashboard");
                }}
                expense={props.expense}
            ></ExpenseForm>

            <button
                onClick={(e) => {
                    props.dispatch(startRemoveExpense(props.expense.id));
                    props.history.push("/dashboard");
                }}
            >
                remove me
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((e) => e.id === props.match.params.id),
    };
};

export default connect(mapStateToProps)(EditExpensePage);
