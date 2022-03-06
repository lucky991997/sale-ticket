import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckingTicketPage from "../pages/CheckingTicketPage";
import HomePage from "../pages/HomePage";
import ListTicketPage from "../pages/ListTicketPage";

const configRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/ticket" element={<ListTicketPage />} />
      <Route path="/check" element={<CheckingTicketPage />} />
    </Routes>
  );
};

export default configRoutes;
