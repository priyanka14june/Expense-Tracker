import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

/* function NewExpenses() {} can be written as array function as const NewExpense = () => {}; */
const NewExpenses = (props) => {
  /* parameter name : enteredExpenseData is on to you, you can name anything */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
