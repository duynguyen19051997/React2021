import { React } from "react";

import { Card, Span } from "../UIComponent/UI";

import "./ExpenseDate.css";

export const ExpenseDate = (props) => {
  const classes = props.className + " date";
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <Card className={classes}>
      <Card className="expense-date__year">
        <Span>{year}</Span>
      </Card>
      <Card className="expense-date__month">
        <Span>{month.substr(0, 3)}</Span>
      </Card>
      <Card className="expense-date__day">
        <Span>{day}</Span>
      </Card>
    </Card>
  );
};
