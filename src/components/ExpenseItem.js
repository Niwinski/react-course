import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseItem = (props) => {
    return (
        <div>
            <h3>
                description:
                <Link to={"/edit/" + props.id}>{props.description}</Link>
            </h3>
            <p> ammount {numeral(props.amount / 100).format("$0,0.00")} </p>
            <p> did it{moment(props.createdAt).format("MMM do")} </p>
        </div>
    );
};

export default ExpenseItem;
