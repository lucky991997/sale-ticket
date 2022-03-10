import React from "react";

const TableListTicket = () => {
  const data = [
    {
      id: 4,
      numberTicket: "123456789",
      date: "14/12/2022",
      type: "Vé cổng",
      port: "Cổng 1",
      check: false,
    },
    {
      id: 4,
      numberTicket: "123456789",
      date: "14/12/2022",
      type: "Vé cổng",
      port: "Cổng 1",
      check: true,
    },
    {
      id: 4,
      numberTicket: "123456789",
      date: "14/12/2022",
      type: "Vé cổng",
      port: "Cổng 1",
      check: false,
    },
    {
      id: 4,
      numberTicket: "123456789",
      date: "14/12/2022",
      type: "Vé cổng",
      port: "Cổng 1",
      check: true,
    },
  ];

  return (
    <div className="checkingticket-list">
      <table  className="checkingticket-list__table">
        <thead style ={{  border: '1px solid black'}} className="checkingticket-list__table__head">
          <tr>
            <td style={{ paddingLeft: "24px" }}>STT</td>
            <td>Số vé</td>
            <td>Ngày sử dụng</td>
            <td>Tên loại vé</td>
            <td>Cổng check-in</td>
            <td></td>
          </tr>
        </thead>
       
          {data.map((item, index) => (
            <div style={{ height: "48px", display: 'contents' }}>
              <tr
                key={index}
                style={{ height: "48px" }}
                className={`${
                  (index + 1) % 2 === 0 ? "bg-primary" : "bg-secondary"
                } checkingticket-list__table__content__row`}
              >
                <td style={{ paddingLeft: "36px" }}>{index + 1}</td>
                <td>
                  <span>{item.numberTicket}</span>
                </td>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item.port}</td>
                <td>
                  <span
                    className={`${
                      item.check === false ? "checked" : "ischecked"
                    } checkingticket-list__table__content__text`}
                  >
                    {item.check === false ? "Chưa đối soát" : "Đã đối soát"}
                  </span>
                </td>
              </tr>
            </div>
          ))}
      
      </table>
    </div>
  );
};

export default TableListTicket;
