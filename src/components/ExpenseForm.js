import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
// import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do YYYY"));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense
                ? (props.expense.amount / 100).toString()
                : "",
            createdAt: props.expense
                ? moment(props.expense.createdAt)
                : moment(),
            calendarFocused: false,
            error: "",
        };
        console.log(this.state);
    }

    onDescChange = (e) => {
        const d = e.target.value;
        this.setState(() => ({ description: d }));
    };

    onDateChanged = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChanged = (focus) => {
        this.setState(() => ({ calendarFocused: focus }));
    };

    onNotesChange = (e) => {
        const d = e.target.value;

        this.setState(() => ({ note: d }));
    };

    onAmountChange = (e) => {
        const a = e.target.value;
        if (!a || a.match(/^\d+\.?\d{0,2}$/)) {
            this.setState(() => ({ amount: a }));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (!this.state.description) {
            this.setState(() => ({ error: "need a description" }));
        } else {
            this.setState(() => ({ error: undefined }));
            this.props.onSubmit({
                description: this.state.description,
                amount: +this.state.amount * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <h1>ERROR: {this.state.error}</h1>}
                    <input
                        type="text"
                        value={this.state.description}
                        placeholder="description"
                        autoFocus
                        onChange={this.onDescChange}
                    ></input>
                    <input
                        type="text"
                        value={this.state.amount}
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                    ></input>
                    <textarea
                        name="notes"
                        value={this.state.note}
                        onChange={this.onNotesChange}
                        placeholder="notes (optional)"
                    ></textarea>

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChanged}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChanged}
                        numberOfMonths={1}
                        isOutsideRange={(d) => false}
                        id="afa"
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
