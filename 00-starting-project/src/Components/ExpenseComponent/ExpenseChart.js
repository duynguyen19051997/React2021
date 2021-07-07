import { React } from "react";

import { Card } from "../UIComponent/UI";
import { Chart } from "../CharComponent/Chart";

import "./ExpenseChart.css";

export const ExpenseChart = (props) => {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let i in props.expenses) {
    let month = i.date.getMonth();
    dataPoints[month].value += i.price;
  }

  return (
    <Card className="expenses-chart">
      <Chart dataPoints={dataPoints} />
    </Card>
  );
};
