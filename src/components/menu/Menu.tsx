import React, { useEffect, useRef, useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  ContainerOutlined,
  PicCenterOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./menus.scss";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "antd/lib/menu/MenuItem";

const LeftMenu = () => {
  const menus = [
    {
      title: "Trang Chủ",
      section: "home",
      path: "/",
      icon: HomeOutlined,
    },
    {
      title: "Quản lý vé",
      section: "ticket",
      path: "/ticket",
      icon: PicCenterOutlined,
    },
    {
      title: "Đối soát vé",
      section: "check",
      path: "/check",
      icon: ContainerOutlined,
    },
    {
      title: "Cài đặt",
      section: "setting",
      path: "/setting",
      icon: SettingOutlined,
    },
  ];

  const { pathname } = useLocation();
  const curPath = pathname.split("/")[1]
  const activeMenu = menus.findIndex((item) => item.section === curPath);
  const menuRef = useRef<MenuItem | any | null>(null);
  const [active, setActive] = useState(activeMenu);

  useEffect(() => {
    setActive(curPath.length === 0 ? 0 : activeMenu);

  }, [active, activeMenu, curPath]);

  const handleActive = () => {
    setActive(activeMenu);
    menuRef.current?.classList?.toggle("active");
  };
  return (
    <div className="menus">
      <div className="menus__logo">
        <Link to="/home">
          <img
            className="menus__logo__image"
            src="../../../../images/logo.png"
            alt="home"
          />
        </Link>
      </div>
      <div className="menus__list">
        <Menu
          style={{ backgroundColor: "#f9f6f4" }}
          defaultSelectedKeys={[`${activeMenu}`]}
        >
          {menus.map((item, index) => (
            <Menu.Item
              ref={menuRef}
              onClick={() => handleActive()}
              className={`menus__list__item ${
                active === index ? "active" : ""
              }`}
              style={{ padding: 0, lineHeight: "56px" }}
              key={index}
              icon={<item.icon />}
            >
              <Link className="menus__list__item__title" to={item.path}>
                <span
                  className={`${active === index ? "active-title" : ""}`}
                >
                  {item.title}
                </span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <span className="menus__list__service">Gói dịch vụ</span>
      </div>
    </div>
  );
};

export default LeftMenu;
