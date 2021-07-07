import { React } from "react";

import { ChartBar } from "./ChartBar";
import { Card } from "../UIComponent/UI";

import "./Chart.css";

export const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((x) => x.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Card className="chart">
      {props.dataPoints.map((x) => (
        <ChartBar
          key={x.label}
          value={x.value}
          maxValue={totalMaximum}
          label={x.label}
        />
      ))}
    </Card>
  );
};
