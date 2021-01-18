import React from "react";
import { Link } from "react-router-dom";

const ExpenseItem = (props) => {
    return (
        <div>
            <h3>
                description:
                <Link to={"/edit/" + props.id}>{props.description}</Link>
            </h3>
            <p> ammount ${props.amount / 100} </p>
            <p> did it{props.createdAt} </p>
        </div>
    );
};

export default ExpenseItem;
