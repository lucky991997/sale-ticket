import React, { useEffect, useRef, useState } from "react";
import { Select, Radio, Space } from "antd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";

import "./filterpackageticket.scss";
import DatepickerTest from "../../../components/datePicker/DatePick";

type TicketFilterProps = {
  component: number;
};

const TicketFilter = ({ component }: TicketFilterProps) => {
  const data = [
    {
      title: "Tất cả",
      path: "/listcheck",
      section: "listcheck",
    },
    {
      title: "Đã đối soát",
      path: "/checked",
      section: "checked",
    },
    {
      title: "Chưa đối soát",
      path: "/ischecked",
      section: "ischecked",
    },
  ];
  const { Option } = Select;
  const [value, setValue] = useState(component);
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

  const { pathname } = useLocation();

  const [index, setIndex] = useState<number | boolean>(0);
  const navigate = useNavigate();
  useEffect(() => {
    setValue(component === -1 ? 0 : component);
  }, [component, index, pathname, navigate]);

  const onChange = (e: any, index: number) => {
    setIndex(e.target.value);
  };

  return (
    <div className="ticketfilter">
      <h1 className="ticketfilter__title">Lọc vé</h1>
      {/* <div className="ticketfilter__select">{selectBefore}</div> */}
      <div className="ticketfilter-check">
        <h2>Tình trạng đối soát</h2>
        <div className="ticketfilter-check__state">
          <Radio.Group value={value}>
            <Space direction="vertical">
              {data.length > 0 &&
                data.map((item, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <Link to={`/check${item.path}`}>
                      <Radio
                        onChange={(e) => {
                          onChange(e, index);
                        }}
                        value={index}
                      ></Radio>
                    </Link>
                    <span className="title-radio">{item.title}</span>
                  </div>
                ))}
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
          <DatepickerTest styleIcon={{color:'#A5A8B1'}} styleInput={{backgroundColor:'#E0E0E0'}} styles={{right: 0}} />
        </div>
      </div>
      <div className="ticketfilter-end-date">
        <h2>Đến ngày</h2>
        <div className="ticketfilter-end-date__calendar">
          <DatepickerTest styleInput={{backgroundColor:'#F7F8FB'}} styles={{right: 0}} />
        </div>
      </div>
      <div className="ticketfilter-btn">
        <Button style={{ width: "160px" }} variant="secondary" size="XL">
          Lọc
        </Button>
      </div>
    </div>
  );
};

export default TicketFilter;
