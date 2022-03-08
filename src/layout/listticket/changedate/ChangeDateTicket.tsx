import React from "react";
import Button from "../../../components/button/Button";
import Calendar from "../../../components/calendar/Calendar";

import "./changedateticket.scss";
const ChangeDateTicket = () => {
  return (
    <div className="changedateticket">
      <h1 className="title-layout">Đổi ngày sử dụng</h1>
      <div className="changedateticket-code">
        <h2>Số vé</h2>
        <h3>PKG20210502</h3>
      </div>
      <div className="changedateticket-event">
        <h2>Số vé</h2>
        <h3>Vé cổng - Gói sự kiện</h3>
      </div>
      <div className="changedateticket-name">
        <h2>Tên sự kiện</h2>
        <h3>Hội chợ triển lãm hàng tiêu dùng 2021 </h3>
      </div>
      <div className="changedateticket-date">
        <h2>Hạn sử dụng</h2>
        <div style={{marginLeft: '96px'}}>
          <Calendar calendarStyles={{ position: "relative" }} />
        </div>
      </div>
      <div className="btn-layout">
        <div>
          <Button styles={{ width: "160px" }} variant="secondary" size="XL">
            Hủy
          </Button>
        </div>
        <div>
          <Button styles={{ width: "160px" }} variant="primary" size="XL">
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeDateTicket;
