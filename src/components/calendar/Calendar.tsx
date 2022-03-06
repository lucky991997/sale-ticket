import React, { CSSProperties } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";

import './calendar.scss'


type CalendarProps = {
    styles?: CSSProperties;
    iconStyle?: CSSProperties;
}

const Calendar = ( { styles , iconStyle }: CalendarProps ) => {
  return (
    <div  className="calendar">
      <input style={styles}  placeholder="tháng 4 -2021" />
      <div className="calendar__icon">
        <AiTwotoneCalendar style={iconStyle} className="icon" />
      </div>
    </div>
  );
};

export default Calendar;
