import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { AiOutlineClockCircle, AiTwotoneCalendar } from "react-icons/ai";

import Button from "../../../components/button/Button";
import { Input, InputIcon } from "../../../components/input/Input";

import "./updatepackageticket.scss";
import { Ticket } from "../../../store/constant/types";
import { formatDate } from "../../../components/table/tableTicket/ListTicket";
import Calendar from "../../../components/calendar/Calendar";

type UpdatePackageProps = {
  closeUpdate: any;
};
const UpdatePackageTicket = ({ closeUpdate }: UpdatePackageProps) => {
  const { ticket, loading } = useSelector(
    (state: RootState) => state.ticketReducer
  );

  const override = css`
    text-align: center;
    display: block;
    margin: 0 auto;
  `;
  const color = "#f1f4f8";
  const data = ticket as Ticket;
  const time = new Date();

  const handleCloseUpdate = () => {
    closeUpdate(false);
  };
  const handleAddPackage = () => {
    alert("Update successful !!!!");

    closeUpdate(false);
  };

  const { Option } = Select;
  useEffect(() => {}, [ticket, loading]);
  return (
    <div className="updatepackage-ticket">
      <h1 className="title-layout">Cập nhật thông tin gói vé</h1>
      <BeatLoader color={color} loading={loading} css={override} size={150} />
      {data && (
        <>
          <div className="updatepackage-ticket-event">
            <div className="updatepackage-ticket-event__code">
              <h2 style={{ marginBottom: "5px" }}>
                Mã sự kiện <span className="note">*</span>
              </h2>
              <Input
                style={{ width: "245px" }}
                type="text"
                handleChange={(event) => console.log(event.target.value)}
                value={data.code}
                placeholder="PKG20210502"
              />
            </div>
            <div className="updatepackage-ticket-event__name">
              <h2 style={{ marginBottom: "5px" }}>Tên sự kiện</h2>
              <Input
                type="text"
                placeholder={data.event}
                value={data.event}
                handleChange={(event) => console.log(event.target.value)}
              />
            </div>
          </div>
          <div className="updatepackage-ticket-date">
            <div className="updatepackage-ticket-date__start">
              <h2>Ngày áp dụng</h2>
              <div style={{ display: "flex" }}>
                <Calendar variant='modal' />
                <InputIcon
                  handleClick={() => console.log("123")}
                  handleChange={(event) => console.log(event.target.value)}
                  type="text"
                  value={time.toLocaleTimeString().split(" ")[0]}
                  placeholder={time.toLocaleTimeString().split(" ")[0]}
                >
                  <AiOutlineClockCircle
                    style={{ color: "#FF993C", width: "20px", height: "20px" }}
                  />
                </InputIcon>
              </div>
            </div>
            <div className="updatepackage-ticket-date__end">
              <h2>Ngày hết hạn</h2>
              <div style={{ display: "flex" }}>
                <Calendar variant='modal' />

                <InputIcon
                  handleClick={() => console.log("123")}
                  handleChange={(event) => console.log(event.target.value)}
                  type="text"
                  value={time.toLocaleTimeString().split(" ")[0]}
                  placeholder={time.toLocaleTimeString().split(" ")[0]}
                >
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
              <span className="label-title">/ vé</span>
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
              placeholder={data.isCheck === true ? "Đang áp dụng" : "Đã tắt"}
              value={data.isCheck === true ? "Đang áp dụng" : "Đã tắt"}
              optionFilterProp="children"
            >
              <Option value="1">
                <span className="label-title">
                  {data.isCheck === true ? "Đang áp dụng" : "Đã tắt"}
                </span>
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
              <Button
                onClick={handleCloseUpdate}
                style={{ width: "160px" }}
                variant="secondary"
                size="XL"
              >
                Hùy
              </Button>
            </div>
            <div>
              <Button
                onClick={handleAddPackage}
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

export default UpdatePackageTicket;
