import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { InputSearch } from "../../components/input/Input";
import { Modal } from "antd";

import Button from "../../components/button/Button";
import Status from "../../components/status/Status";
import TableListTicket from "../../components/tablelistticket/TableListTicket";
import FilterTicket from "../filter/filterTicket/FilterTicket";
import ChangeDateTicket from "./changedate/ChangeDateTicket";

import "./listticket.scss";

const ListTicket = () => {
  const [filterTicket, setFilterTicket] = useState(false);
  const [changeTicket, setChangeTicket] = useState(false);

  const showfilter = () => {
    setFilterTicket(true);
  };
  const showChangeDate = () => {
    setChangeTicket(true);
  };
  return (
    <div className="main-layout">
      <div className="listticket">
        <h2 className="main-title">Danh sách vé</h2>
        <div className="listticket-action">
          <InputSearch inputType="text" placeholder="Tìm bằng số vé" />
          <div className="listticket-action__btn">
            <Button
              onClick={() => showfilter()}
              variant="secondary"
              size="XL"
              style={{ width: "132px", paddingLeft: "18px" }}
            >
              <FiFilter style={{ marginRight: "7px", width: "20px" }} />
              Lọc vé
            </Button>
            <Button
              onClick={() => {
                showChangeDate();
              }}
              style={{ minWidth: "182px", marginLeft: "12px" }}
              variant="secondary"
              size="XL"
            >
              Xuất file (.csv)
            </Button>
          </div>
        </div>
        <TableListTicket />
        <Status variant="open">Đang mở</Status>
      </div>
      {filterTicket && (
        <Modal onCancel={() => setFilterTicket(false)} visible={filterTicket}>
          <FilterTicket />
        </Modal>
      )}

      {changeTicket && (
        <Modal onCancel={() => setChangeTicket(false)} visible={changeTicket}>
          <ChangeDateTicket setChange={setChangeTicket} />
        </Modal>
      )}
    </div>
  );
};

export default ListTicket;
