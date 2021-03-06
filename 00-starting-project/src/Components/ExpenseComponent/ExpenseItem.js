import { React } from "react";

import { ExpenseDate } from "./ExpenseDate";
import { Card, Span, Delete } from "../UIComponent/UI";

import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate className="expense-date" date={props.data.date} />
      <Card className="expense-title">
        <h3>{props.data.title}</h3>
      </Card>
      <Card className="expense-price">
        <Span>${props.data.price}</Span>
      </Card>
      <Card className="expense-action">
        <Delete onDelete={props.onDelete} id={props.data.id} title="Delete" />
      </Card>
    </Card>
  );
};
