import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { Line, Bar } from "react-chartjs-2";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Chart from "chart.js/auto";

import "./linechart.scss";
import Calendar from "../calendar/Calendar";
Chart.register(CategoryScale);
const LineChart = () => {
  const date = [
    " 29/03 - 04/04 ",
    "05/04 - 11/04",
    "12/01 - 18/04",
    "19/04 - 25/04",
    "26/04 - 02/05",
  ];
  
  const data = {
    labels: date,
    datasets: [
      {
        label: "First dataset",
        data: ["140", "180", "220", "260", "220"],
        fill: {
          target: "origin",
          above: "rgba(250, 160, 95, 0.26)", 
          below: "rgba(255, 255, 255, 0)", // And blue below the origin
        },
        borderColor: "#ff993c",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: {
        text: "value",
        ticks: {
          stepSize: 40,
        },
      },
    },
  };
  return (
    <div className="linechart">
      <div className="linechart__title">Doanh thu</div>
      <Calendar />
      <div className="linechart-chart">
        <Line data={data} options={options} height={298} width={1488}/>
      </div>
    </div>
  );
};

export default LineChart;
