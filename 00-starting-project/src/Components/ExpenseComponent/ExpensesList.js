import { React, useState } from "react";

import { ExpenseItem } from "./ExpenseItem";
import { Card, P, Label } from "../UIComponent/UI";
import { ExpenseChart } from "./ExpenseChart";

import "./ExpensesList.css";

export const ExpensesList = (props) => {
  const [year, setYear] = useState("");

  let yearFilterArr = [
    ...new Set(props.expenses.map((x) => x.date.getFullYear())),
  ];

  const selectYearHandler = (event) => {
    setYear(parseInt(event.target.value));
  };

  let expensesFilter =
    year !== "" && !isNaN(year)
      ? props.expenses.filter((x) => x.date.getFullYear() === year)
      : props.expenses;

  let expensesContent =
    expensesFilter.length > 0 ? (
      expensesFilter.map((x) => (
        <ExpenseItem onDelete={props.onDelete} key={x.id} data={x} />
      ))
    ) : (
      <P className="no-expense">No expense</P>
    );

  console.log(year);
  console.log(yearFilterArr);

  return (
    <Card>
      <Card className="expense-filter">
        <Card className="expense-filter__label">
          <Label>Choose year to search</Label>
        </Card>
        <Card className="expense-filter__select">
          <select onChange={selectYearHandler}>
            <option defaultValue>--Select--</option>
            {yearFilterArr.length > 0 ? (
              yearFilterArr.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))
            ) : (
              <option value="2019">2019</option>
            )}
          </select>
        </Card>
      </Card>
      <ExpenseChart expense={expensesFilter} />
      {expensesContent}
    </Card>
  );
};
