import React, { useEffect, useRef, useState } from "react";
import { Select, Radio, Space } from "antd";

import { Link } from "react-router-dom";
import Calendar from "../../../components/calendar/Calendar";
import Button from "../../../components/button/Button";

import "./filterpackageticket.scss";

type TicketFilterProps = {
  component: any;
};

const TicketFilter = ({ component }: TicketFilterProps) => {
  const { Option } = Select;
  const [value, setValue] = useState<number>(component | 0);
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
  const radioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    radioRef.current?.focus();
    if (component !== -1) {
      setValue(component);
    } else {
      setValue(0);
    }
  }, [component]);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="ticketfilter">
      <h1 className="ticketfilter__title">Lọc vé</h1>
      {/* <div className="ticketfilter__select">{selectBefore}</div> */}
      <div className="ticketfilter-check">
        <h2>Tình trạng đối soát</h2>
        <div className="ticketfilter-check__state">
          <Radio.Group
            onChange={(e) => onChange(e)}
            value={value}
            ref={radioRef}
          >
            <Space direction="vertical">
              <div style={{ position: "relative" }}>
                <Link to="/check/listcheck">
                  <Radio value={0}></Radio>
                </Link>
                <span className="title-radio">Tất cả</span>
              </div>
              <div style={{ position: "relative" }}>
                <Link to="/check/checked">
                  <Radio value={1}></Radio>
                </Link>
                <span className="title-radio">Đã đối soát</span>
              </div>

              <div style={{ position: "relative" }}>
                <Link to="/check/ischecked">
                  <Radio value={2}></Radio>
                </Link>
                <span className="title-radio">Chưa đối soát</span>
              </div>
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
          <Calendar placeholder="01/05/2021"
            styles={{ width: "192px", backgroundColor: "#E0E0E0" }}
            iconStyle={{ color: "#A5Abb1" }}
          />
        </div>
      </div>
      <div className="ticketfilter-end-date">
        <h2>Đến ngày</h2>
        <div className="ticketfilter-end-date__calendar">
          <Calendar  placeholder="dd/mm/yy" styles={{ width: "192px" }} />
        </div>
      </div>
      <div className="ticketfilter-btn">
        <Button styles={{ width: "160px" }} variant="secondary" size="XL">
          Lọc
        </Button>
      </div>
    </div>
  );
};

export default TicketFilter;
