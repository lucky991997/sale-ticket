import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";

import { Pie, Doughnut } from "react-chartjs-2";

import "./piechart.scss";
import Calendar from "../calendar/Calendar";

const PieChart = () => {
  const dataFamily = {
    labels: undefined,
    datasets: [
      {
        label: undefined,
        data: [13568, 56024],
        backgroundColor: ["#FF8A48", "#4F75FF"],
      },
    ],
  };
  const dataEvent = {
    labels: undefined,
    datasets: [
      {
        label: undefined,
        data: [28302, 30256],
        backgroundColor: ["#FF8A48", "#4F75FF"],
      },
    ],
  };
  return (
    <div className="piechart">
      <div className="piechart-calendar">
        <input placeholder="tháng 4 -2021" />
        <div className="piechart-calendar__icon">
          <AiTwotoneCalendar className="icon" />
        </div>
       
      </div>
      <div className="piechart-family">
        <h2 className="piechart-family__title">Gói Gia đình</h2>
        <div className="piechart-family__chart">
          <Doughnut data={dataFamily} />
        </div>
      </div>

      <div className="piechart-event">
        <h2 className="piechart-event__title">Gói Sự Kiện</h2>
        <div className="piechart-event__chart">
          <Doughnut data={dataEvent} />
        </div>
      </div>
      <div className="piechart-values">
        <div className="piechart-values__used">
          <div className="piechart-values__used__rectangle"></div>
          <h3 className="piechart-values__used__title">Vé đã sử dụng</h3>
        </div>
        <div className="piechart-values__not-use">
          <div className="piechart-values__not-use__rectangle"></div>
          <h3 className="piechart-values__not-use__title">Vé chưa sử dụng</h3>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
