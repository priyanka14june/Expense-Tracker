import React from "react";
import "./App.css";
import Expenses from "./components/Expenses";

/* <ExpenseItem /> can be written as <ExpenseItem> </ExpenseItem> and every componenet should be imported to app.js as its the main componenet to show up on page */
/* new Date() is the JS function to fect date. new Date(2021, 2, 28) is the date set with initaial date as 2021 as year,  month as march(02--because month starts from 0(jan) and date as 28th)*/
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div>
      <h2>Money Tracker</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
