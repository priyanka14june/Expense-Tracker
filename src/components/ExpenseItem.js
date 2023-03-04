import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  /* new Date() is the JS function to fect date. new Date(2021, 2, 28) is the date set with initaial date as 2021 as year,  month as march(02--because month starts from 0(jan) and date as 28th)*/
  /* Naming convection of variable name starts with small letters and then capital letter as expenseDate */
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insaurance";
  const expenseAmount = 294.79;

  return (
    /* you must have only 1 root element per return statement */
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <h2 className="expense-item__description">{expenseTitle}</h2>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;

/* new Date() function cannot be output as {expenseDate} directly and hence it will break so we use method called .toISOString() mehtod */
