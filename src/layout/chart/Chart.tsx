import React from "react";
import LineChart from "../../components/lineChart/LineChart";
import PieChart from "../../components/pieChart/PieChart";
import "./chart.scss";
const Chart = () => {
  return (
    <div className="main-layout chart">
      <div className="chart">
        <h1 className="main-title">Thống Kê</h1>
        <div>
          <LineChart />
        </div>
        <div className="chart-revenue">
          <h4 className="chart-revenue__title">Tổng doanh thu theo tuần</h4>
          <h3 className="chart-revenue__total">
            525.145.000 <span>Đồng</span>
          </h3>
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Chart;
