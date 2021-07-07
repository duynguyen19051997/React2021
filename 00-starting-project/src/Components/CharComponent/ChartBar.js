import { React } from "react";

import { Card } from "../UIComponent/UI";

import "./ChartBar.css";

export const ChartBar = (props) => {
  let barFillHeigh = "0%";

  if (props.maxValue > 0) {
    barFillHeigh = Math.floor((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <Card className="chart-bar">
      <Card className="chart-bar__inner">
        <Card
          className="chart-bar__fill"
          style={{ height: barFillHeigh }}
        ></Card>
      </Card>
      <Card className="chart-bar__label">{props.label}</Card>
    </Card>
  );
};
