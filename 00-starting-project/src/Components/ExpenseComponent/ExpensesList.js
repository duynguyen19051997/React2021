import { React } from "react";

import { ExpenseItem } from "./ExpenseItem";
import { Card, P } from "../UIComponent/UI";
import { ExpenseChart } from "./ExpenseChart";

import "./ExpensesList.css";

export const ExpensesList = (props) => {
  let expensesContent =
    props.expenses.length > 0 ? (
      props.expenses.map((x) => (
        <ExpenseItem onDelete={props.onDelete} key={x.id} data={x} />
      ))
    ) : (
      <P className="no-expense">No expense</P>
    );

  return (
    <Card>
      <ExpenseChart expense={props.expenses} />
      {expensesContent}
    </Card>
  );
};
