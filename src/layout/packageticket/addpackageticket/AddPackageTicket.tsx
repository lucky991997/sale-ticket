import React from "react";
import { Checkbox, Select } from "antd";

import Button from "../../../components/button/Button";
import { Input, InputIcon } from "../../../components/input/Input";
import {  AiOutlineClockCircle } from "react-icons/ai";

import "./addpackageticket.scss";
import DatepickerTest from "../../../components/datePicker/DatePick";


type AddTicketProps = {
  closeTicket: any;
};

const AddPackageTicket = ({ closeTicket }: AddTicketProps) => {
  const { Option } = Select;

  const CloseAddTicket = () => {
    closeTicket(false);
  };

  const handleAddTicket = () => {
    alert("Update successful !!!!");
    closeTicket(false);
  };

  const status = ["Đang áp dụng", "Đã tắt", "Đang mở"];
  return (
    <div className="addpackaege-ticket">
      <h1 className="title-layout">Thêm gói vé</h1>
      <div className="addpackaege-ticket-name">
        <h2 style={{ marginBottom: "5px" }}>
          Tên gói vé <span className="note">*</span>
        </h2>
        <Input type="text" placeholder="Nhập  tên gói vé" />
      </div>
      <div className="addpackaege-ticket-date">
        <div className="addpackaege-ticket-date__start">
          <h2>Ngày áp dụng</h2>
          <div style={{ display: "flex" }}>
            <DatepickerTest />

            <InputIcon
              handleClick={() => console.log(123)}
              type="text"
              placeholder={"hh:mm:ss"}
            >
              <AiOutlineClockCircle
                style={{ color: "#FF993C", width: "20px", height: "20px" }}
              />
            </InputIcon>
          </div>
        </div>
        <div className="addpackaege-ticket-date__end">
          <h2>Ngày hết hạn</h2>
          <div style={{ display: "flex" }}>
          <DatepickerTest />

            <InputIcon
              handleClick={() => console.log(123)}
              type="text"
              placeholder={"hh:mm:ss"}
            >
              <AiOutlineClockCircle
                style={{ color: "#FF993C", width: "20px", height: "20px" }}
              />
            </InputIcon>
          </div>
        </div>
      </div>
      <div className="addpackaege-ticket-price">
        <h2>Giá vé áp dụng</h2>
        <div className="addpackaege-ticket-price__odd">
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
          <span className="label-title">/ vé</span>
        </div>
        <div className="addpackaege-ticket-price__combo">
          <Checkbox >
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
      <div className="addpackaege-ticket-status">
        <h2>Tình trạng</h2>
        <Select
          style={{ width: 176 }}
          placeholder="Đang áp dụng"
          optionFilterProp="children"
        >
          {status.length > 0 &&
            status.map((item, index) => (
              <Option style={{color:'orange'}} key={index} value={item}>
                <span className="label-title">{item}</span>
              </Option>
            ))}
        </Select>
        ,
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="note">*</span>
          <span className="note-title">Thông tin bắt buộc</span>
        </div>
      </div>
              
      <div className="btn-layout">
        <div>
          <Button
            onClick={() => {
              CloseAddTicket();
            }}
            style={{ width: "160px" }}
            variant="secondary"
            size="XL"
          >
            Hùy
          </Button>
        </div>
        <div>
          <Button
            onClick={handleAddTicket}
            style={{ width: "160px" }}
            variant="primary"
            size="XL"
          >
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPackageTicket;
