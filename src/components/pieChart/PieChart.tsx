import React from "react";
import { Doughnut } from "react-chartjs-2";

import "./piechart.scss";
import DatepickerTest from "../datePicker/DatePick";
import Box from "../box/Box";

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
  const dataNumber = {
    dataEvent: dataEvent.datasets[0].data,
    dataFamily: dataFamily.datasets[0].data,
  };

  return (
    <div className="piechart">
      <div style={{ marginLeft: "180px", right: "0" }}>
        <div className="ticketfilter-start-date">
          <div className="ticketfilter-start-date__calendar">
            <DatepickerTest styles={{ left: "110%", top: "-160%" }} />
          </div>
        </div>
      </div>
      <div className="piechart-family">
        <h2 className="piechart-family__title">Gói Gia đình</h2>
        <div className="piechart-family__chart">
          <Doughnut data={dataFamily} />
          {dataNumber.dataFamily.map((item, index) => (
            <div key={index}>
              {index === 0 ? (
                <Box styles={{ position: "absolute", right: 0, top: "10%" }}>
                  {item}
                </Box>
              ) : (
                <Box styles={{ position: "absolute", left: 0, top: "50%" }}>
                  {item}
                </Box>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="piechart-event">
        <h2 className="piechart-event__title">Gói Sự Kiện</h2>
        <div className="piechart-event__chart">
          <Doughnut data={dataEvent} />
          {dataNumber.dataEvent.map((item, index) => (
            <div key={index}>
              {index === 0 ? (
                <Box styles={{ position: "absolute", right: 0, top: "50%" }}>
                  {item}
                </Box>
              ) : (
                <Box styles={{ position: "absolute", left: 0, top: "50%" }}>
                  {item}
                </Box>
              )}
            </div>
          ))}
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
