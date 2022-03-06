import React from "react";
import Button from "../../components/button/Button";
import { InputSearch } from "../../components/input/Input";

import "./checkticket.scss";
const CheckingTicket = () => {
  console.log(<input />);
  return (
    <div className="main-layout checkingticket">
      <h2 className="main-title">Đối soát vé</h2>
      <div className="checkingticket-action">
        <InputSearch inputType="text" placeholder="Tìm bằng số vé" />
        <Button variant="primary" size="XL" styles={{ width: "174px" }}>
          Chốt đối soát
        </Button>
      </div>
      ListChecking ticket
    </div>
  );
};

export default CheckingTicket;
