import React from "react";
import { Input, Select, Radio, Space } from "antd";

import "./ticketfilter.scss";
import Calendar from "../calendar/Calendar";
import Button from "../button/Button";

const TicketFilter = () => {
  const { Option } = Select;

  const selectBefore = (
    <Select
      style={{ minWidth: "246px" }}
      defaultValue="Hội chợ triển lãm tiêu dùng 2021"
      className="select-before"
    >
      <Option value="room">Hội chợ triển lãm tiêu dùng 2021</Option>
      <Option value="online">Online</Option>
    </Select>
  );

  return (
    <div className="ticketfilter">
      <h1 className="ticketfilter__title">Lọc vé</h1>
      <div className="ticketfilter__select">{selectBefore}</div>
      <div className="ticketfilter-check">
        <h2>Tình trạng đối soát</h2>
        <div className="ticketfilter-check__state">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>Tất cả</Radio>
              <Radio value={2}>Đã đối soát</Radio>
              <Radio value={3}>Chưa đối soát</Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="ticketfilter-type">
        <h2>Loại vé</h2>
        <span>vé cổng </span>
      </div>
      <div className="ticketfilter-start-date">
        <h2>Từ ngày</h2>
        <div className="ticketfilter-start-date__calendar">
          <Calendar
            styles={{ width: "192px", backgroundColor: "#E0E0E0" }}
            iconStyle={{ color: "#A5Abb1" }}
          />
        </div>
      </div>
      <div className="ticketfilter-end-date">
        <h2>Đến ngày</h2>
        <div className="ticketfilter-end-date__calendar">
          <Calendar styles={{ width: "192px" }} />
        </div>
      </div>
      <div className="ticketfilter-btn">
        <Button  styles={{ width: "160px" }} variant="secondary" size="XL">
          Lọc
        </Button>
      </div>
    </div>
  );
};

export default TicketFilter;
