import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const date = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{date}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
