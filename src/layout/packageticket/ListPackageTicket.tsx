import React, { useState } from "react";
import Button from "../../components/button/Button";
import { InputSearch } from "../../components/input/Input";
import AddPackageTicket from "./addpackageticket/AddPackageTicket";
import UpdatePackageTicket from "./updatepackage/UpdatePackageTicket";


const ListPackageTicket = () => {
  const [addPackaeg, setAddPackage] = useState(false);
  const handleAdd = () => {
      setAddPackage(true)
  }
  return (
    <div className="main-layout">
      <div className="listticket">
        <h2 className="main-title">Danh sách gói vé</h2>
        <div className="listticket-action">
          <InputSearch inputType="text" placeholder="Tìm bằng số vé" />
          <div className="listticket-action__btn">
            <Button
              style={{ minWidth: "182px", marginRight: "24px" }}
              variant="secondary"
              size="XL"
            >
              Xuất file (.csv)
            </Button>
            <Button onClick={() => {handleAdd()}} style={{ width: "164px" }} variant="primary" size="XL">
              Thêm gói vé
            </Button>
          </div>
        </div>
        {
          addPackaeg && <AddPackageTicket/>
        }
        <UpdatePackageTicket/>
      </div>

    </div>
  );
};

export default ListPackageTicket;
