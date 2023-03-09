import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /* Naming convection of variable name starts with small letters and then capital letter as expenseDate */

  return (
    /* you must have only 1 root element per return statement */
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;

/* new Date() function cannot be output as {expenseDate} directly and hence it will break so we use method called .toISOString() mehtod */
