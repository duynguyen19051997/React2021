import { React, useState } from "react";

import { ExpenseItem } from "./ExpenseItem";
import { Card, P } from "../UIComponent/UI";
import { ExpenseChart } from "./ExpenseChart";

import "./ExpensesList.css";

export const ExpensesList = (props) => {
  const [year, setYear] = useState("");

  let yearFilterArr = [
    ...new Set(props.expenses.map((x) => x.date.getFullYear())),
  ];

  const selectYearHandler = (event) => {
    setYear(event.target.value);
  };

  let expensesContent =
    props.expenses.length > 0 ? (
      props.expenses.map((x) => (
        <ExpenseItem onDelete={props.onDelete} key={x.id} data={x} />
      ))
    ) : (
      <P className="no-expense">No expense</P>
    );

  console.log(year);
  console.log(yearFilterArr);

  return (
    <Card>
      <Card>
        <table>
          <tr>
            <td>Choose year to search</td>
            <td>
              <select onChange={selectYearHandler}>
                {yearFilterArr.length > 0 ? (
                  yearFilterArr.map((x) => <option value={x}>{x}</option>)
                ) : (
                  <option value="2019">2019</option>
                )}
              </select>
            </td>
          </tr>
        </table>
      </Card>
      <ExpenseChart expense={props.expenses} />
      {expensesContent}
    </Card>
  );
};
