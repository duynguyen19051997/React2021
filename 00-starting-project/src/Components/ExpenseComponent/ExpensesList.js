import { ExpenseItem } from "./ExpenseItem";
import { Card, P } from "../UIComponent/UI";

import "./ExpensesList.css";

export const ExpensesList = (props) => {
  let expensesContent =
    props.expenses.length > 0 ? (
      props.expenses.map((x) => (
        <ExpenseItem onDelete={props.onDelete} key={x.id} data={x} />
      ))
    ) : (
      <P>No expense</P>
    );

  return <Card>{expensesContent}</Card>;
};
