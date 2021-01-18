import React from "react";
import { connect } from "react-redux";
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseFilters extends React.Component {
    state = {
        calendarFocused: null,
    };
    onDatesChage = ({ startDate: start, endDate: end }) => {
        console.log("start=> ", start);
        console.log("end=> ", end);
        this.props.dispatch(setStartDate(start));
        this.props.dispatch(setEndDate(end));
    };

    onFocusChange = (focused) => {
        this.setState(() => ({
            calendarFocused: focused,
        }));
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                        console.log(e.target.value);
                    }}
                />
                Sort by:
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        e.target.value === "date"
                            ? this.props.dispatch(sortByDate())
                            : this.props.dispatch(sortByAmount());
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChage}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(d) => false}
                    showClearDates={true}
                ></DateRangePicker>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseFilters);
