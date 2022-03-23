import React, { useEffect } from "react";
import Button from "../../../components/button/Button";
import Calendar from "../../../components/calendar/Calendar";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import "./changedateticket.scss";
import { Ticket } from "../../../store/constant/types";
type ChangeDateProps = {
  setChange: any;

};
const ChangeDateTicket = ( { setChange }: ChangeDateProps) => {
  const { ticket } = useSelector((state: RootState) => state.ticketReducer);

  
  const data = ticket as Ticket
  const closeChange = () => {
    if (typeof setChange === "function") {
      setChange(false);
    } else {
      console.log("is not defound");
    }
  };

  const handleChangeTicket = () => {
    alert("change successful !!!");
    setChange(false);
  };

  return (
    <div className="changedateticket">
      <h1 className="title-layout">Đổi ngày sử dụng</h1>
      {data && (
        <>
          <div className="changedateticket-code">
            <h2>Số vé</h2>
            <h3>{data.ticketNumber}</h3>
          </div>
          <div className="changedateticket-event">
            <h2>Số vé</h2>
            <h3>Vé cổng - Gói sự kiện</h3>
          </div>
          <div className="changedateticket-name">
            <h2>Tên sự kiện</h2>
            <h3>{data.event}</h3>
          </div>
          <div className="changedateticket-date">
            <h2>Hạn sử dụng</h2>
            <div style={{ marginLeft: "96px" }}>
              <Calendar variant='modal'/>
            </div>
          </div>
          <div className="btn-layout">
            <div>
              <Button
                onClick={closeChange}
                style={{ width: "160px" }}
                variant="secondary"
                size="XL"
              >
                Hủy
              </Button>
            </div>
            <div>
              <Button
                onClick={handleChangeTicket}
                style={{ width: "160px" }}
                variant="primary"
                size="XL"
              >
                Lưu
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChangeDateTicket;
