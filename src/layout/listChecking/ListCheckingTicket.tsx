import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

import { formatDate } from "../../components/table/tableTicket/ListTicket";

import "./checkticket.scss";
import { showTicket } from "../../store/actions/TicketAction";
import Pagination from "../../components/pagination/Pagination";

const ListCheckingTicket = () => {
  const override = css`
    text-align: center;
    display: block;
    margin: 0 auto;
  `;
  const color = "#f1f4f8";
  const today = new Date();

  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector(
    (state: RootState) => state.ticketReducer
  );
  const [isLoading, setIsLoading] = useState(loading);
  useEffect(() => {
    dispatch(showTicket());
    setIsLoading(loading);
  }, [dispatch, loading]);
  const [curPage, setCurPage] = useState(1);
  const [ticketPage, setTicketPage] = useState(12);
  const indexOfLastcurrentPage = curPage * ticketPage;
  const indexOfFirstcurrentPage = indexOfLastcurrentPage - ticketPage;
  const curTicket = tickets.slice(
    indexOfFirstcurrentPage,
    indexOfLastcurrentPage
  );
  const paginate = (pageNumber: number) => {
    setCurPage(pageNumber);
  };
  return (
    <>
      <div className="checkingticket-list">
        <BeatLoader
          color={color}
          loading={isLoading}
          css={override}
          size={150}
        />
        {curTicket && curTicket.length > 0 ? (
          <>
            <table className="checkingticket-list__table">
              <thead className="checkingticket-list__table__head">
                <tr>
                  <td style={{ paddingLeft: "24px" }}>STT</td>
                  <td>Số vé</td>
                  <td>Ngày sử dụng</td>
                  <td>Tên loại vé</td>
                  <td>Cổng check-in</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className="checkingticket-list__table__content">
                {curTicket.map((item, index) => (
                  <tr
                    key={index}
                    style={{ height: "48px" }}
                    className={`${
                      (index + 1) % 2 === 0 ? "bg-primary" : "bg-secondary"
                    } checkingticket-list__table__content__row`}
                  >
                    <td style={{ paddingLeft: "36px" }}>{index + 1}</td>
                    <td>
                      <span>{item.ticketNumber}</span>
                    </td>
                    <td>
                      {item.startDate || `${formatDate(today, "dd/mm/yyyy")}`}
                    </td>
                    <td>{"Vé cổng"}</td>
                    <td>{item.port || "Cổng 10"}</td>
                    <td>
                      <span
                        className={`${
                          item.isCheck === true ? "ischecked" : "checked"
                        } checkingticket-list__table__content__text`}
                      >
                        {item.isCheck === false
                          ? "Chưa đối soát"
                          : "Đã đối soát"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <h1 style={{ color: "red" }}>{error}</h1>
        )}
      </div>
      <Pagination
        totalData={tickets.length}
        ticketPage={ticketPage}
        paginate={paginate}
        curPage={curPage}
      />
    </>
  );
};

export default ListCheckingTicket;
