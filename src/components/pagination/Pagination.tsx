import React, { useEffect, useState } from "react";

import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { Ticket } from "../../store/constant/types";

import "./pagination.scss";

type PageProps = {
  totalData: number;
  ticketPage: number;
  paginate: any;
  curPage: number;
};

const Pagination = ({
  totalData,
  ticketPage,
  paginate,
  curPage,
}: PageProps) => {
  const pageNumber: Array<number> = [];
  const totalPage = Math.ceil(totalData / ticketPage);
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }
  const handleClick = (item: number, index: number) => {
    paginate(item);
    if (item === index + 1) {
      console.log("test13");
    }
    console.log(curPage);
  };
  const handlePrePage = () => {
    const total = curPage - 1;
    paginate(total);
  };

  const handleNextPage = () => {
    const total = curPage + 1;
    paginate(total);
  };
  return (
    <div className="pagination">
      <ul className="pagination-list">
        <li className="pagination-list__item">
          <button
            disabled={curPage === 1 ? true : false}
            onClick={() => handlePrePage()}
            style={{ marginTop: "5px" }}
            className={`${
              curPage === 1
                ? "pagination-list__item__link disabled"
                : "pagination-list__item__link"
            }`}
          >
            <AiOutlineCaretLeft
              style={{
                width: "20px",
                height: "20px",
                color: "#A5A8B1",
              }}
            />
          </button>
        </li>
        {pageNumber.map((item, index) => (
          <li
            key={item}
            className={`${
              item === curPage
                ? `active-pagination pagination-list__item`
                : `pagination-list__item`
            }`}
          >
            <button
              onClick={() => handleClick(item, index)}
              className="pagination-list__item__link"
            >
              <span>{item}</span>
            </button>
          </li>
        ))}

        <li className="pagination-list__item">
          <button
            disabled={curPage === totalPage ? true : false}
            onClick={() => handleNextPage()}
            style={{ marginTop: "5px" }}
            className={`${
              curPage === totalPage
                ? "pagination-list__item__link disabled"
                : "pagination-list__item__link"
            }`}
          >
            <AiOutlineCaretRight
              style={{
                width: "20px",
                height: "20px",
                color: "#A5A8B1",
              }}
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
