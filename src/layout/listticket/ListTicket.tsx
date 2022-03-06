import React from "react";
import { BsSearch } from "react-icons/bs";

import Button from "../../components/button/Button";
import { InputSearch } from "../../components/input/Input";
import TableListTicket from "../../components/tablelistticket/TableListTicket";

import "./listticket.scss";

const ListTicket = () => {
  return (
    <div className="main-layout">
      <div className="listticket">
        <h2 className="main-title">Danh sách gói vé</h2>
        <div className="listticket-action">
          {/* <div className="listticket-action__search">
            <input type="text" placeholder="Tìm bằng số vé" />
            <button>
              <BsSearch
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#1E0D03",
                }}
              />
            </button>
          </div> */}
          <InputSearch inputType="text" placeholder="Tìm bằng số vé" />
          <div className="listticket-action__btn">
            <Button
              style={{ minWidth: "182px", marginRight: "24px" }}
              variant="secondary"
              size="XL"
            >
              Xuất file (.csv)
            </Button>
            <Button style={{ width: "164px" }} variant="primary" size="XL">
              Thêm gói vé
            </Button>
          </div>
        </div>
        <TableListTicket />
      </div>
    </div>
  );
};

export default ListTicket;
