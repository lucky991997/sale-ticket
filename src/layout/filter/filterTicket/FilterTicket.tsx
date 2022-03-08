import React, { useState } from "react";

import { Radio, Checkbox, Row, Col } from "antd";

import Button from "../../../components/button/Button";
import Calendar from "../../../components/calendar/Calendar";

import "./filterticket.scss";

const FilterTicket = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="filterticket">
      <h1 className="title-layout">Lọc vé</h1>
      <div className="filterticket-date">
        <div className="filterticket-date__start">
          <h2>Từ ngày</h2>
          <Calendar calendarStyles={{ position: "relative" }} />
        </div>
        <div className="filterticket-date__end">
          <h2>Đến ngày</h2>
          <Calendar calendarStyles={{ position: "relative" }} />
        </div>
      </div>
      <div className="filterticket-status">
        <h2>Tình trạng sử dụng</h2>
        <div className="filterticket-status__radio">
          <Radio.Group onChange={(e) => onChange(e)} value={value}>
            <Radio value={1}>
              <span className="filterticket-status__radio__title">Tất cả</span>
            </Radio>
            <Radio value={2}>
              <span className="filterticket-status__radio__title">
                Đã sử dụng
              </span>
            </Radio>
            <Radio value={3}>
              <span className="filterticket-status__radio__title">
                Chưa sử dụng
              </span>
            </Radio>
            <Radio value={4}>
              <span className="filterticket-status__radio__title">Hết hạn</span>
            </Radio>
          </Radio.Group>
        </div>
      </div>

      <div className="filterticket-check">
        <h2>Cổng check - In</h2>
        <div className="filterticket-check__check">
          <Checkbox.Group style={{ width: "100%" }}>
            <Row>
              <Col span={8}>
                <Checkbox value="0">
                  <span className="filterticket-check__check__title">
                    Tất cả
                  </span>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="1">
                  <span className="filterticket-check__check__title">
                    Cổng 1
                  </span>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="2">
                  <span className="filterticket-check__check__title">
                    Cổng 2
                  </span>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="3">
                  <span className="filterticket-check__check__title">
                    Cổng 3
                  </span>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="4">
                  <span className="filterticket-check__check__title">
                    Cổng 4
                  </span>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="5">
                  <span className="filterticket-check__check__title">
                    Cổng 5
                  </span>
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          ,
        </div>
      </div>
      <div className="btn-layout">
        <div>
        <Button styles={{ width: "160px" }} variant="secondary" size="XL">
          Lọc
        </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterTicket;
