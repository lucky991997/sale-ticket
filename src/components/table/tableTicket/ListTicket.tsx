import React, { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Status from "../../status/Status";
import "./listticket.scss";
import { getTicket, showTicket } from "../../../store/actions/TicketAction";
import { Modal } from "antd";
import ChangeDateTicket from "../../../layout/listticket/changedate/ChangeDateTicket";
import Pagination from "../../pagination/Pagination";

const TableListTicket = () => {
  const today = new Date();
  //loading
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #e19e9ed9;
  `;
  const color = "#e19e9ed9";
  const [changeTicket, setChangeTicket] = useState(false);
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector(
    (state: RootState) => state.ticketReducer
  );
  let [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    dispatch(showTicket());
    setIsLoading(loading);
  }, [dispatch, loading]);

  const showChangeDate = (id: string) => {
    dispatch(getTicket(id));
    setChangeTicket(true);
  };
  //set pagination 
  const [curPage, setCurrentPage] = useState(1);
  const [ticketPage, setTicketPage] = useState(12);
  const indexOfLastcurrentPage = curPage * ticketPage;
  const indexOfFirstcurrentPage = indexOfLastcurrentPage - ticketPage;
  const curTicket = tickets.slice(
    indexOfFirstcurrentPage,
    indexOfLastcurrentPage
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="listticket-list">
        <ClipLoader
          color={color}
          loading={isLoading}
          css={override}
          size={150}
        />
        {curTicket.length > 0 ? (
          <table className="listticket-list__table">
            <thead className="listticket-list__table__head">
              <tr>
                <td style={{ paddingLeft: "32px" }}>STT</td>
                <td>Booking code</td>
                <td>Số vé</td>
                <td>Tên sự kiện</td>
                <td>
                  <span>Tình trạng sử dụng</span>
                </td>
                <td>
                  <span>Ngày sử dụng</span>
                </td>
                <td>Ngày xuất vé</td>
                <td>Cổng check - in</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {curTicket.map((item, index) => (
                <tr
                  key={index}
                  style={{ height: "48px" }}
                  className={`${
                    (index + 1) % 2 === 0 ? "bg-primary" : "bg-secondary"
                  } listticket-list__table__content`}
                >
                  <td style={{ paddingLeft: "36px" }}>
                    <span className="listticket-list__table__content__row">
                      {index + 1}
                    </span>
                  </td>
                  <td>
                    <span>{item.code}</span>
                  </td>
                  <td>
                    <span>{item.ticketNumber}</span>
                  </td>
                  <td>
                    <span>{item.event}</span>
                  </td>
                  <td>
                    <span>
                      {item.status === "open" ? (
                        <Status
                          styles={{ width: "129px" }}
                          variant={item.status}
                        >
                          Chưa sử dụng
                        </Status>
                      ) : item.status === "coming" ? (
                        <Status
                          styles={{ width: "114px" }}
                          variant={item.status}
                        >
                          Đã sử dụng
                        </Status>
                      ) : (
                        item.status === "end" && (
                          <Status variant={item.status}>Hết Hạn</Status>
                        )
                      )}
                    </span>
                  </td>
                  <td>
                    <span>
                      {item.useDate
                        ? item.useDate
                        : `${formatDate(today, "dd/mm/yy")}`}
                    </span>
                  </td>
                  <td>
                    <span>
                      {item.startDate
                        ? item.startDate
                        : `${formatDate(today, "dd/mm/yy")}`}
                    </span>
                  </td>
                  <td>
                    <span>
                      {item.port ? (
                        item.port
                      ) : (
                        <span style={{ marginLeft: "20px" }}>_</span>
                      )}
                    </span>
                  </td>
                  <td>
                    {item.status === "open" && (
                      <button
                        style={{
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          showChangeDate(item.code);
                        }}
                      >
                        <BiDotsVerticalRounded
                          style={{
                            color: "#1E0D03",
                            width: "48px",
                            height: "18px",
                            opacity: "0.7",
                          }}
                        />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      {changeTicket && (
        <Modal onCancel={() => setChangeTicket(false)} visible={changeTicket}>
          <ChangeDateTicket setChange={setChangeTicket} />
        </Modal>
      )}
    </>
  );
};

const formatDate = (date: Date, format: any) => {
  const day = format
    .replace("mm", date.getMonth() + 1)
    .replace("yy", date.getFullYear())
    .replace("dd", date.getDate());
  return day;
};

export { formatDate };
export default TableListTicket;
