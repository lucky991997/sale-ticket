import React from "react";
import { BsSearch } from "react-icons/bs";
import {  InputIcon, InputSearch } from "../input/Input";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-search">
  
        <input
          type="text"
          placeholder="Search"
          className="header-search__input"
        />

        <button className="header-search__icon">
          <BsSearch
            onClick={() => console.log(13123)}
            style={{
              width: "24px",
              height: "24px",
              position: "absolute",
              top: "10px",
              left: "25%",
              cursor: "pointer",
            }}
          />
        </button>
      </div>
      <div className="header-info">
        <div className="header-info__icon">
          <i
            style={{ marginLeft: "13px" }}
            className="fa fa-thin fa-envelope"
          ></i>
          <i
            style={{ marginLeft: "29px" }}
            className="fa fa-regula fa-bell"
          ></i>
          <div className="header-info__icon__info">
            <img src="../../../../images/avt.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
