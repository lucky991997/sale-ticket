import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import React from "react";
import { AiOutlineClockCircle, AiTwotoneCalendar } from "react-icons/ai";
import Button from "../../../components/button/Button";
import { Input, InputIcon } from "../../../components/input/Input";

import "./updatepackageticket.scss";
const UpdatePackageTicket = () => {
  const { Option } = Select;
  return (
    <div className="updatepackage-ticket">
      <h1 className="title-layout">Cập nhật thông tin gói vé</h1>
      <div className="updatepackage-ticket-event">
        <div className="updatepackage-ticket-event__code">
          <h2 style={{ marginBottom: "5px" }}>
            Mã sự kiện <span className="note">*</span>
          </h2>
          <Input style={{width: "245px"}} type="text" placeholder="PKG20210502" />
        </div>
        <div className="updatepackage-ticket-event__name">
          <h2 style={{ marginBottom: "5px" }}>
          Tên sự kiện 
          </h2>
          <Input type="text" placeholder="Hội chợ triển lãm hàng tiêu dùng 2021" />
        </div>
      </div>
      <div className="updatepackage-ticket-date">
        <div className="updatepackage-ticket-date__start">
          <h2>Ngày áp dụng</h2>
          <div style={{ display: "flex" }}>
            <InputIcon
              style={{ marginRight: "9px" }}
              type="text"
              placeholder={"01/04/2021"}
            >
              <AiTwotoneCalendar
                style={{ color: "#FF993C", width: "20px", height: "20px" }}
              />
            </InputIcon>

            <InputIcon type="text" placeholder={"08:00:00"}>
              <AiOutlineClockCircle
                style={{ color: "#FF993C", width: "20px", height: "20px" }}
              />
            </InputIcon>
          </div>
        </div>
        <div className="updatepackage-ticket-date__end">
          <h2>Ngày hết hạn</h2>
          <div style={{ display: "flex" }}>
            <InputIcon
              style={{ marginRight: "9px" }}
              type="text"
              placeholder="01/04/2021"
            >
              <AiTwotoneCalendar
                style={{ color: "#FF993C", width: "20px", height: "20px" }}
              />
            </InputIcon>

            <InputIcon type="text" placeholder="08:00:00">
              <AiOutlineClockCircle
                style={{ color: "#FF993C", width: "20px", height: "20px" }}
              />
            </InputIcon>
          </div>
        </div>
      </div>
      <div className="updatepackage-ticket-price">
        <h2>Giá vé áp dụng</h2>
        <div className="updatepackage-ticket-price__odd">
          <Checkbox>
            <span style={{ margin: 0 }} className="label-title">
              Vé Lẻ (vnd/vé) với giá
            </span>
          </Checkbox>
          <Input
            style={{ width: "144px", background: "#F1F4F8" }}
            type="text"
            placeholder="Giá vé"
          />
          <span className="label-title">/vé</span>
        </div>
        <div className="updatepackage-ticket-price__combo">
          <Checkbox>
            <span style={{ margin: 0 }} className="label-title">
              Combo vé với giá
            </span>
          </Checkbox>
          <Input
            style={{ width: "144px", background: "#F1F4F8" }}
            type="text"
            placeholder="Giá vé"
          />
          <span className="label-title">/</span>
          <Input
            style={{ width: "85px", background: "#F1F4F8" }}
            type="text"
            placeholder="Giá vé"
          />
          <span className="label-title">vé</span>
        </div>
      </div>
      <div className="updatepackage-ticket-status">
        <h2>Tình trạng</h2>
        <Select
          style={{ width: 176 }}
          placeholder="Đang áp dụng"
          optionFilterProp="children"
        >
          <Option value="1">
            <span className="label-title">Đang áp dụng</span>
          </Option>
        </Select>
        ,
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="note">*</span>
          <span className="note-title">Thông tin bắt buộc</span>
        </div>
      </div>

      <div className="btn-layout">
        <div>
          <Button style={{ width: "160px" }} variant="secondary" size="XL">
            Hùy
          </Button>
        </div>
        <div>
          <Button style={{ width: "160px" }} variant="primary" size="XL">
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePackageTicket;
