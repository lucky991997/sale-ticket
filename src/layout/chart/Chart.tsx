import React from "react";
import LineChart from "../../components/lineChart/LineChart";
import PieChart from "../../components/pieChart/PieChart";
import "./chart.scss";
const Chart = () => {
  return (
    <div className="main-layout chart">
      <div className="chart">
        <h1 className="main-title">Thống Kê</h1>

        <LineChart />

        <PieChart />
      </div>
    </div>
  );
};

export default Chart;
