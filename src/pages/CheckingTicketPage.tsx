import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/button/Button";
import { InputSearch } from "../components/input/Input";
import TicketFilter from "../layout/filter/filterpackage/FilterPackageTicket";
// import TicketFilter from "../components/filter/filterpackage/FilterPackageTicket";
import {
  CheckingTicket,
  IsCheckingTicket,
} from "../layout/listChecking/CheckingTicket";
import ListCheckingTicket from "../layout/listChecking/ListCheckingTicket";

const CheckingTicketPage = () => {
  const { pathname } = useLocation();
  const components = ["/check/listcheck", "/check/checked", "/check/ischecked"];

  const component = components.findIndex((item) => item === pathname);
 
  const handleChecking = () => {
    if (component === 1) {
      return <CheckingTicket />;
    } else if (component === 2) {
      return <IsCheckingTicket />;
    } else {
      return <ListCheckingTicket />;
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="main-layout checkingticket">
      <h2 className="main-title">Đối soát vé</h2>
      <div className="checkingticket-action">
        <InputSearch inputType="text" placeholder="Tìm bằng số vé" />
        <Button variant="primary" size="XL" styles={{ width: "174px" }}>
          Chốt đối soát
        </Button>
      </div>
      <div>{handleChecking()}</div>
    </div>
      
      <div style={{ marginLeft: "24px" }}>
        <TicketFilter component={component} />
      </div>
    </div>
  );
};

export default CheckingTicketPage;
