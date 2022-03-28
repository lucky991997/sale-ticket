import React, { CSSProperties, useEffect, useState } from "react";
import "./datepicker.scss";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiTwotoneCalendar,
} from "react-icons/ai";
import useCalendar from "./UseCalendar";

export interface IDatepickerTestProps {
  styles?: CSSProperties;
  styleInput?: CSSProperties;
  styleIcon?: CSSProperties;
}

const DatepickerTest: React.FunctionComponent<IDatepickerTestProps> = ({
  styles,
  styleInput,
  styleIcon,
}) => {
  const {
    calendarRows,
    selectedDate,
    todayFormat,
    days,
    months,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  const [showValueDate, setShowValueDate] = useState<string | undefined>(
    undefined
  );

  //handle DatePicker
  const [showDate, setShowDate] = useState(false);
  const handleDatePicker = () => {
    setShowDate(true);
  };

  const radio = ["Theo tuần", "Theo tháng"];

  //handle radio
  const [dayPicker, setDayPicker] = useState(0); //0 : day , 1: week
  const handleChangeRadio = (e: any, index: number) => {
    setDayPicker(index);
    if (e.timeStamp) {
      setTimeout(() => {
        setValueWeek(undefined);
        setValueDay(undefined);
      }, 100);
    }
  };

  // handle value Day / week picker

  const [valueWeek, setValueWeek] = useState<number | undefined>(undefined);
  const [valueDay, setValueDay] = useState<number | undefined>(undefined);

  const handelDayPicker = (date: any, index: number) => {
    if (date) {
      if (dayPicker === 0) {
        if (index + 1) {
          setValueDay(date);
          setValueWeek(undefined);
          setTimeout(() => {
            setShowDate(false);
          }, 1000);
        }
      }
      if (dayPicker === 1) {
        if (index + 1) {
          setValueWeek(index);
          setValueDay(undefined);
          setTimeout(() => {
            setShowDate(false);
          }, 1000);
        }
      }
      setShowValueDate(date);
    }
  };
  return (
    <>
      <div>
        <div className="date-picker">
          <input
            style={styleInput}
            className="date-picker__input"
            value={showValueDate ? showValueDate : todayFormat}
            onChange={(e) => console.log(e.target.value)}
          />
          <button
            style={styleInput}
            className="date-picker__btn"
            onClick={() => handleDatePicker()}
          >
            <AiTwotoneCalendar
              style={{
                color: `${styleIcon ? styleIcon.color : "#FF993C"}`,
                width: "20px",
                height: "20px",
                marginTop: "1px",
              }}
            />
          </button>
        </div>
        {showDate && (
          <div className="calendar" style={styles}>
            <div className="calendar-header">
              <AiOutlineLeft
                style={{ cursor: "pointer" }}
                onClick={getPrevMonth}
              />
              <p className="calendar-header__title">
                {`${
                  months[selectedDate.getMonth()]
                },  ${selectedDate.getFullYear()}`}
              </p>
              <AiOutlineRight
                style={{ cursor: "pointer" }}
                onClick={getNextMonth}
              />
            </div>
            <div className="calendar-container ">
              {radio &&
                radio.map((item, index) => (
                  <div key={index} className="calendar-container__control">
                    <input
                      checked={dayPicker === index}
                      className="calendar-container__control__input"
                      type="radio"
                      onChange={(e) => handleChangeRadio(e, index)}
                    />
                    <span className="calendar-container__control__title">
                      {item}
                    </span>
                  </div>
                ))}
            </div>
            <div style={{ margin: " 0 -9px 0" }}>
              <table className="calendar-table">
                <thead>
                  <tr className="calendar-table__row-weeks">
                    {days.map((day) => (
                      <th key={day}>
                        <div className="hoverDay">{day}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.values(calendarRows).map((cols: any, index) => {
                    return (
                      <tr
                        className={`${
                          valueWeek === index
                            ? "calendar-table__row-day active-date"
                            : `${
                                dayPicker === 1
                                  ? `calendar-table__row-day week-hover`
                                  : `calendar-table__row-day`
                              }`
                        }`}
                        key={index}
                      >
                        {cols.map((col: any) =>
                          col.date ? (
                            <td
                              key={col.date}
                              className={`${
                                valueDay === col.date
                                  ? "active-day date"
                                  : "date"
                              }`}
                              onClick={() => handelDayPicker(col.date, index)}
                            >
                              <div
                                className={`${
                                  col.classes === ""
                                    ? "date"
                                    : "date isactive-day"
                                }`}
                              >
                                {col.value}
                              </div>
                            </td>
                          ) : (
                            ""
                          )
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DatepickerTest;
