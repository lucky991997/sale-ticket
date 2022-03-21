import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Modal } from "antd";
import { BiEdit } from "react-icons/bi";

import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

import { RootState } from "../../../store";
import { getTicket, showTicket } from "../../../store/actions/TicketAction";

import UpdatePackageTicket from "../../../layout/packageticket/updatepackage/UpdatePackageTicket";
import Button from "../../button/Button";
import Status from "../../status/Status";

import "./tablelistticket.scss";
import { formatDate } from "../tableTicket/ListTicket";
const TablePackageListTicket = () => {
  const time = new Date();
  const override = css`
    text-align: center;
    display: block;
    margin: 0 auto;
  `;
  const color = "#f1f4f8";

  const dispatch = useDispatch();
  const { ticket, tickets, error, loading } = useSelector(
    (state: RootState) => state.ticketReducer
  );
  const [updatePackage, setUpdatePackage] = useState(false);

  useEffect(() => {
    dispatch(showTicket());
  }, [dispatch, loading, ticket]);
  const handleShowUpdate = (id: string) => {
    dispatch(getTicket(id));
    setUpdatePackage(true);
  };
  const ramdom = () => {
    let number = Math.floor(Math.random() * 10);
    if (number > 0) {
      return number;
    } else {
      return (number = 1);
    }
  };
  return (
    <div className="packageticket-list">
      <BeatLoader color={color} loading={loading} css={override} size={150} />
      {tickets && tickets.length > 0 ? (
        <table className="packageticket-list__table">
          <thead className="packageticket-list__table__head">
            <tr>
              <td style={{ paddingLeft: "24px" }}>STT</td>
              <td>Mã gói</td>
              <td>Tên gói vé</td>
              <td>
                <span style={{ paddingLeft: "22px" }}>Ngày áp dụng</span>
              </td>
              <td>
                <span style={{ paddingLeft: "22px" }}>Ngày hết hạn</span>
              </td>
              <td>Giá vé (VNĐ/Vé)</td>
              <td>Giá Combo (VNĐ/Combo)</td>
              <td>Tình trạng</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item, index) => (
              <tr
                key={index}
                style={{ height: "48px" }}
                className={`${
                  (index + 1) % 2 === 0 ? "bg-primary" : "bg-secondary"
                } packageticket-list__table__content`}
              >
                <td style={{ paddingLeft: "36px" }}>
                  <span className="packageticket-list__table__content__row">
                    {index + 1}
                  </span>
                </td>
                <td>
                  <span className="packageticket-list__table__content__row">
                    {item.code}
                  </span>
                </td>
                <td>
                  <span className="packageticket-list__table__content__row">
                    {`${
                      (index + 1) % 2 === 0 ? "Gói gia đình" : "Gói sự kiện"
                    }`}
                  </span>
                </td>
                <td>
                  <div
                    style={{ marginRight: "48px" }}
                    className="packageticket-list__table__content__start-date"
                  >
                    <span className="packageticket-list__table__content__row">
                      {item.startDate
                        ? item.startDate
                        : formatDate(time, "dd/mm/yy")}
                    </span>
                    <span className="packageticket-list__table__content__row">
                      {time.toLocaleTimeString().split(" ")[0]}
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    style={{ marginRight: "48px" }}
                    className="packageticket-list__table__content__end-date"
                  >
                    <span className="packageticket-list__table__content__row">
                      {item.useDate}
                    </span>
                    <span className="packageticket-list__table__content__row">
                      {time.toLocaleTimeString().split(" ")[0]}
                    </span>
                  </div>
                </td>
                <td>
                  <span className="packageticket-list__table__content__row">
                    {`${
                      (index + 1) % 2 === 0
                        ? `${(400000).toLocaleString()}`
                        : `${(500000).toLocaleString()}`
                    }`}
                    VND
                  </span>
                </td>
                <td>
                  <span className="packageticket-list__table__content__row">
                    {`${
                      (index + 1) % 2 === 0 && ramdom() > 0
                        ? `${(400000 * ramdom()).toLocaleString()}`
                        : `${(500000 * ramdom()).toLocaleString()}`
                    }`}{" "}
                    VND
                  </span>
                </td>
                <td>
                  <span>
                    {item.isCheck === true ? (
                      <Status styles={{ width: "132px" }} variant="open">
                        Đang áp dụng
                      </Status>
                    ) : (
                      <Status
                        styles={{ minWidth: "59px", width: "59px" }}
                        variant="end"
                      >
                        Tắt
                      </Status>
                    )}
                  </span>
                </td>
                <td>
                  <span>
                 
                    <Button
                      onClick={() => handleShowUpdate(item.code)}
                      size="M"
                      variant="secondary"
                      style={{border:'none'}}
                      className={`${((index+1) % 2 === 0 ? `btn-secondary bg-primary` : `btn-secondary`)}`}
                    >
                     <BiEdit 
                     style= {{marginRight: '4px'}}
                     />
                      <span style={{fontWeight: 500}}>Cập nhật </span>
                      
                    </Button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 style={{ color: "red" }}>{error}</h1>
      )}

      {updatePackage && (
        <div className="package-modal">
          <Modal
            onCancel={() => setUpdatePackage(false)}
            visible={updatePackage}
          >
            <UpdatePackageTicket closeUpdate={setUpdatePackage} />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default TablePackageListTicket;
