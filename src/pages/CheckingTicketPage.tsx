import React from "react";
import { useLocation } from "react-router-dom";
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
      <div>{handleChecking()}</div>
      <div style={{ marginLeft: "24px" }}>
        <TicketFilter component={component} />
      </div>
    </div>
  );
};

export default CheckingTicketPage;
