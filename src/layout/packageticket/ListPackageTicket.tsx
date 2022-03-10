import React, { useState } from "react";
import Button from "../../components/button/Button";
import { InputSearch } from "../../components/input/Input";
import { Modal } from "antd";
import AddPackageTicket from "./addpackageticket/AddPackageTicket";
import UpdatePackageTicket from "./updatepackage/UpdatePackageTicket";

import "./listpackagemodal.scss";
const ListPackageTicket = () => {
  const [addPackage, setAddPackage] = useState(false);
  const handleAdd = () => {
    setAddPackage(true);
  };

  const [updatePackage, setUpdatePackage] = useState(false);
  const handleUpdate = () => {
    setUpdatePackage(true);
  };
  return (
    <div className="main-layout">
      <div className="listticket">
        <h2 className="main-title">Danh sách gói vé</h2>
        <div className="listticket-action">
          <InputSearch inputType="text" placeholder="Tìm bằng số vé" />
          <div className="listticket-action__btn">
            <Button
              onClick={handleUpdate}
              style={{ minWidth: "182px", marginRight: "24px" }}
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
        {addPackage && (
          <div className="package-modal">
            <Modal
              onCancel={() => setUpdatePackage(false)}
              visible={addPackage}
            >
              <AddPackageTicket closeTicket={setAddPackage} />
            </Modal>
          </div>
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
    </div>
  );
};

export default ListPackageTicket;
