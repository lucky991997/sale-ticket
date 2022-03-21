import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { InputSearch } from "../../components/input/Input";
import { Modal } from "antd";



import Button from "../../components/button/Button";
import FilterTicket from "../filter/filterTicket/FilterTicket";
import ChangeDateTicket from "./changedate/ChangeDateTicket";

import "./listticket.scss";
import TableListTicket from "../../components/table/tableTicket/ListTicket";

const ListTicket = () => {
  const [filterTicket, setFilterTicket] = useState(false);


  const showfilter = () => {
    setFilterTicket(true);
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
              style={{ width: "134px", paddingLeft: "18px" }}
            >
              <FiFilter style={{ marginRight: "7px", width: "20px" }} />
              Lọc vé
            </Button>
            <Button
             
              style={{ minWidth: "184px", marginLeft: "12px" }}
              variant="secondary"
              size="XL"
            >
              Xuất file (.csv)
            </Button>
          </div>
        </div>
       
        <TableListTicket/>
      </div>
      {filterTicket && (
        <Modal style={{padding:'10px'}} onCancel={() => setFilterTicket(false)} visible={filterTicket}>
          <FilterTicket />
        </Modal>
      )}

   
    </div>
  );
};

export default ListTicket;
