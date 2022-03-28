import React, { useEffect, useState } from "react";

import { Area, Pie } from "@ant-design/plots";

import { Line } from "react-chartjs-2";

import { Chart as ChartJS, CategoryScale } from "chart.js";

import Chart from "chart.js/auto";

import "./linechart.scss";
import DatepickerTest from "../datePicker/DatePick";

Chart.register(CategoryScale);
const LineChart = () => {

  const data = [
    {
      week: "29/03 - 04/04",
      value: 150,
    },
    {
      week: "05/04 - 11/04",
      value: 155,
    },
    {
      week: "12/01 - 18/04",
      value: 160,
    },
    {
      week: "19/04 - 25/04",
      value: 165,
    },
    {
      week: "26/04 - 02/05",
      value: 170,
    },
    {
      week: "03/05 - 09/05",
      value: 175,
    },
    {
      week: "10/05 - 16/05",
      value: 170,
    },
    {
      week: "17/05 - 23/05",
      value: 165,
    },
    {
      week: "24/05- 30/05",
      value: 155,
    },
    {
      week: "31/05 - 06/06",
      value: 165,
    },
    {
      week: "07/06 - 13/06",
      value: 185,
    },
    {
      week: "14/06 - 20/06",
      value: 190,
    },
    {
      week: "21/06 - 27/06",
      value: 210,
    },
    {
      week: "28/06 - 04/07",
      value: 220,
    },
    {
      week: "05/07 - 11/07",
      value: 220,
    },
    {
      week: "12/07 - 19/07",
      value: 225,
    },
    {
      week: "20/07 - 26/07",
      value: 215,
    },
    {
      week: "27/07 - 03/08",
      value: 220,
    },
    {
      week: "04/08 - 10/08",
      value: 230,
    },
    {
      week: "11/08 - 17/08",
      value: 225,
    },
    {
      week: "18/08 - 24/08",
      value: 215,
    },
    {
      week: "25/08 - 31/08",
      value: 200,
    },
    {
      week: "01/09 - 07/09",
      value: 195,
    },
    {
      week: "08/09 - 14/09",
      value: 200,
    },
    {
      week: "15/09 - 21/09",
      value: 205,
    }, 
    {
      week: "26/09 - 02/10",
      value: 205,
    }, 
    {
      week: "03/10 - 10/10",
      value: 210,
    },
  ];

  console.log(data);
  const config = {
    data,
    xField: "week",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
    yAxis: {
      min: 140,
      max: 260,
      ticketCount: 40,
     
    },
    smooth: true,
    line: {
      color: "#ff6600",
      size: 4,
    },

    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#ffa200 1:#ffb431",
      };
    },
  };

  return (
    <div className="linechart">
      <div className="ticketfilter-start-date">
        <h1 className="linechart__title ">Doanh thu</h1>
        <div className="ticketfilter-start-date__calendar">
          <DatepickerTest styles={{ right: 0 }} />
        </div>
      </div>

      <div className="linechart-chart">
        <Area {...config} height={1000} />
      </div>
      <div className="chart-revenue">
          <h4 className="chart-revenue__title">Tổng doanh thu theo tuần</h4>
          <h3 className="chart-revenue__total">
            525.145.000 <span>Đồng</span>
          </h3>
        </div>
    </div>
  );
};

export default LineChart;
