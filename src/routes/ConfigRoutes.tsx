import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CheckingTicket,
  IsCheckingTicket,
} from "../layout/listChecking/CheckingTicket";
import ListCheckingTicket from "../layout/listChecking/ListCheckingTicket";
import CheckingTicketPage from "../pages/CheckingTicketPage";
import HomePage from "../pages/HomePage";
import ListPackageTicket from "../pages/ListPackageTicketPage";
import ListTicketPage from "../pages/ListTicketPage";


const configRoutes = () => {
 
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/ticket" element={<ListTicketPage />} />
      <Route path="/check" element={<CheckingTicketPage />}>
        <Route path="/check/" element={<CheckingTicketPage />} />
        <Route path="/check/listcheck" element={<ListCheckingTicket />} />
        <Route path="/check/checked" element={<CheckingTicket />} />
        <Route path="/check/ischecked" element={<IsCheckingTicket />} />
      </Route>
      <Route path='/setting' element={<ListPackageTicket />} />
    </Routes>
  );
};

export default configRoutes;
