import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

import { formatDate } from "../../components/table/tableTicket/ListTicket";

import "./checkticket.scss";
import { showTicket } from "../../store/actions/TicketAction";
import Pagination from "../../components/pagination/Pagination";
const CheckingTicket = () => {
  const today = new Date();
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector(
    (state: RootState) => state.ticketReducer
  );
  useEffect(() => {
    dispatch(showTicket());
  }, [dispatch, loading]);

  const override = css`
    text-align: center;
    display: block;
    margin: 0 auto;
  `;
  const color = "#f1f4f8";

  const [curPage, setCurPage] = useState(1);
  const [ticketPage, setTicketPage] = useState(12);

  const indexOfLastcurrentPage = curPage * ticketPage;
  const indexOfFirstcurrentPage = indexOfLastcurrentPage - ticketPage;

  const ticket = tickets
    .filter((item) => item.isCheck === true)
    .map((item) => item);

  const curTicket = ticket.slice(
    indexOfFirstcurrentPage,
    indexOfLastcurrentPage
  );
  const paginate = (pageNumber: number) => {
    setCurPage(pageNumber);
  };
  return (
    <div className="checkingticket-list">
      <BeatLoader color={color} loading={loading} css={override} size={150} />
      <div style={{ minHeight: "624px" }}>
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
                      {item.startDate || `${formatDate(today, "dd/mm/yy")}`}
                    </td>
                    <td>{`vé cổng`}</td>
                    <td>{item.port || "cổng 10"}</td>
                    <td>
                      <span className="ischeckingticket-list__table__content__text">
                        {item.isCheck === true ? "Đã đối soát" : ""}
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
        totalData={ticket.length}
        ticketPage={ticketPage}
        paginate={paginate}
        curPage={curPage}
      />
    </div>
  );
};

const IsCheckingTicket = () => {
  const today = new Date();
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector(
    (state: RootState) => state.ticketReducer
  );

  useEffect(() => {
    dispatch(showTicket());
  }, [dispatch, loading]);

  const override = css`
    text-align: center;
    display: block;
    margin: 0 auto;
  `;
  const color = "#f1f4f8";

  const [curPage, setCurPage] = useState(1);
  const [ticketPage, setTicketPage] = useState(12);

  const indexOfLastcurrentPage = curPage * ticketPage;
  const indexOfFirstcurrentPage = indexOfLastcurrentPage - ticketPage;

  const ticket = tickets
    .filter((item) => item.isCheck === false)
    .map((item) => item);
  const curTicket = ticket.slice(
    indexOfFirstcurrentPage,
    indexOfLastcurrentPage
  );

  const paginate = (pageNumber: number) => {
    setCurPage(pageNumber);
  };
  console.log(tickets);
  return (
    <>
      <div style={{minHeight: '624px'}}>
        <BeatLoader color={color} loading={loading} css={override} size={150} />
        {curTicket.length > 0 ? (
          <>
            <table className="ischeckingticket-list__table">
              <thead className="ischeckingticket-list__table__head">
                <tr>
                  <td style={{ paddingLeft: "24px" }}>STT</td>
                  <td>Số vé</td>
                  <td>Ngày sử dụng</td>
                  <td>Tên loại vé</td>
                  <td>Cổng check-in</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className="ischeckingticket-list__table__content">
                {curTicket.map((item, index) => (
                  <tr
                    key={index}
                    style={{ height: "48px" }}
                    className={`${
                      (index + 1) % 2 === 0 ? "bg-primary" : "bg-secondary"
                    } ischeckingticket-list__table__content__row`}
                  >
                    <td style={{ paddingLeft: "36px" }}>{index + 1}</td>
                    <td>
                      <span>{item.ticketNumber}</span>
                    </td>
                    <td>
                      {item.startDate || `${formatDate(today, "dd/mm/yyyyy")}`}
                    </td>
                    <td>{`Vé cổng`}</td>
                    <td>{item.port || "cổng 10"}</td>
                    <td>
                      <span className="checkingticket-list__table__content__text">
                        {item.isCheck === false ? "Chưa đối soát" : ""}
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
        totalData={ticket.length}
        ticketPage={ticketPage}
        curPage={curPage}
        paginate={paginate}
      />
    </>
  );
};
export { CheckingTicket, IsCheckingTicket };
