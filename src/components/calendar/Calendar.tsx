import React, { Component, CSSProperties, MouseEvent, useEffect, useState } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";

import "./calendar.scss";
import { InputIcon } from "../input/Input";
import { formatDate } from "../table/tableTicket/ListTicket";
import Time from "../time/Time";

type CalendarProps = {
  styles?: CSSProperties;
  variant?: 'modal' | 'layout' 
};

const Calendar = ({ styles, variant }: CalendarProps) => {
  const [timeDate, setTimeDate] = useState(false);
  const day = new Date();

  const handleDatepicker = () => {
    setTimeDate(true);
  };

  return (
    <>
      <>
        <InputIcon
          styles={{ justifyContent: "flex-end" , }}
          style={{ width: "155px" }}
          handleClick={() => handleDatepicker()}
          type="text"
          placeholder={formatDate(day, "dd/mm/yy")}
        >
          <AiTwotoneCalendar
            style={{ color: "#FF993C", width: "20px", height: "20px" }}
          />
        </InputIcon>
      </>
      {
        timeDate === true && <Time variant = {`${variant === 'modal'? 'modal' : 'layout'}`} timeDate= {setTimeDate}/>
      }
    </>
  );
};

export default Calendar;
