import React, { Component, CSSProperties, MouseEvent } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";

import "./calendar.scss";

type CalendarProps = {
  calendarStyles?: CSSProperties;
  styles?: CSSProperties;
  iconStyle?: CSSProperties;
  placeholder?: string;
};

const Calendar = ({
  calendarStyles,
  styles,
  iconStyle,
  placeholder,
  ...rest
}: CalendarProps) => {
  return (
    <div style={calendarStyles} className="calendar">
      <input style={styles} placeholder={placeholder} />
      <div className="calendar__icon">
        <AiTwotoneCalendar style={iconStyle} className="icon" />
      </div>
    </div>
  );
};

type TimeProps = {};

export default Calendar;

