import React, { useState } from "react";
import Button from "../../components/button/Button";
import { InputSearch } from "../../components/input/Input";
import { Modal } from "antd";
import AddPackageTicket from "./addpackageticket/AddPackageTicket";


import TablePackageListTicket from "../../components/table/tablePackageTicket/TableListTicket";
import Pagination from "../../components/pagination/Pagination";


const ListPackageTicket = () => {
  const [addPackage, setAddPackage] = useState(false);
  const handleAdd = () => {
    setAddPackage(true);
  };
  return (
    <div className="main-layout">
      <div className="listticket">
        <h2 className="main-title">Danh sách gói vé</h2>
        <div className="listticket-action">
          <InputSearch inputType="text" placeholder="Tìm bằng số vé" />
          <div className="listticket-action__btn">
            <Button
              style={{ minWidth: "184px", marginRight: "24px" }}
              variant="secondary"
              size="XL"
            >
              Xuất file (.csv)
            </Button>
            <Button
              onClick={() => {
                handleAdd();
              }}
              style={{ width: "164px" }}
              variant="primary"
              size="XL"
            >
              Thêm gói vé
            </Button>
          </div>
        </div>
        <TablePackageListTicket />
        
        {addPackage && (
          <div className="package-modal">
            <Modal onCancel={() => setAddPackage(false)} visible={addPackage}>
              <AddPackageTicket closeTicket={setAddPackage} />
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPackageTicket;
