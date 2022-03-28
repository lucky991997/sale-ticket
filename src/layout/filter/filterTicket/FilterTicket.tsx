import React, { useState } from "react";

import { Radio, Checkbox, Row, Col, Space } from "antd";

import Button from "../../../components/button/Button";

import "./filterticket.scss";
import DatepickerTest from "../../../components/datePicker/DatePick";

const FilterTicket = () => {
  const port = ["Cổng 1", "Cổng 2", "Cổng 3", "Cổng 4", "Cổng 5"];
  const [value, setValue] = useState(1);
  const [disable, setDisable] = useState(false);
  const onChangeRadio = (e: any) => {
    setValue(e.target.value);
  };

  const onChangeCheckboxAll = (e: any) => {
    if (e.target.checked) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  return (
    <div className="filterticket">
      <h1 className="title-layout">Lọc vé</h1>
      <div className="filterticket-date">
        <div className="filterticket-date__start">
          <h2>Từ ngày</h2>
          <div>
            <DatepickerTest/>
          </div>
        </div>
        <div className="filterticket-date__end">
          <h2>Đến ngày</h2>
          <div>
            <DatepickerTest/>
          </div>
        </div>
      </div>
      <div className="filterticket-status">
        <h2>Tình trạng sử dụng</h2>
        <div className="filterticket-status__radio">
          <Radio.Group onChange={(e) => onChangeRadio(e)} value={value}>
            <Space direction="horizontal">
              <div
                style={{
                  position: "relative",
                  marginRight: "20px",
                  width: "82px",
                }}
              >
                <Radio style={{ marginTop: "-2px" }} value={1}></Radio>
                <span className="title-radio">Tất cả</span>
              </div>
              <div
                style={{
                  position: "relative",
                  marginRight: "20px",
                  width: "127px",
                }}
              >
                <Radio style={{ marginTop: "-2px" }} value={2}></Radio>
                <span className="title-radio">Đã sử dụng</span>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "147px",
                  marginRight: "20px",
                }}
              >
                <Radio style={{ marginTop: "-2px" }} value={3}></Radio>
                <span className="title-radio">Chưa sử dụng</span>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  marginRight: "20px",
                }}
              >
                <Radio style={{ marginTop: "-2px" }} value={4}></Radio>
                <span className="title-radio">Hết hạn</span>
              </div>
            </Space>
          </Radio.Group>
        </div>
      </div>

      <div className="filterticket-check">
        <h2>Cổng check - In</h2>
        <div className="filterticket-check__check">
          <Row>
            <Checkbox.Group style={{ width: "100%" }}>
              <Row>
                <Checkbox
                  value="0"
                  checked
                  style={{ width: "190px" }}
                  onChange={(e) => onChangeCheckboxAll(e)}
                >
                  Tất cả
                </Checkbox>
                {port.length > 0 &&
                  port.map((item, index) => (
                    <Col span={8} key={index}>
                      <Checkbox
                        style={{ width: "100%" }}
                        disabled={disable}
                        value={index}
                        onChange={(e) => console.log(e.target.value)}
                      >
                        <span className="filterticket-check__check__title">
                          {item}
                        </span>
                      </Checkbox>
                    </Col>
                  ))}
              </Row>
            </Checkbox.Group>
          </Row>
          ,
        </div>
      </div>
      <div className="btn-layout">
        <div>
          <Button style={{ width: "160px" }} variant="secondary" size="XL">
            Lọc
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterTicket;
