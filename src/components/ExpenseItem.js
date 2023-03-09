import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /* Naming convection of variable name starts with small letters and then capital letter as expenseDate */
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const date = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    /* you must have only 1 root element per return statement */
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{date}</div>
        <div>{year}</div>
      </div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;

/* new Date() function cannot be output as {expenseDate} directly and hence it will break so we use method called .toISOString() mehtod */
