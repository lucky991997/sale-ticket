import React from "react";
import TicketFilter from "../components/filter/TicketFilter";
import CheckingTicket from "../layout/listChecking/CheckingTicket";

const CheckingTicketPage = () => {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <CheckingTicket />
      </div>
      <div style={{marginLeft:'24px'}}>
        <TicketFilter />
      </div>
    </div>
  );
};

export default CheckingTicketPage;
