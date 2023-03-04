import React from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

/* <ExpenseItem /> can be written as <ExpenseItem> </ExpenseItem> and every componenet should be imported to app.js as its the main componenet to show up on page */

function App() {
  return (
    <div>
      <h2>Money Tracker</h2>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
