import React, { useEffect, useRef } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  BarsOutlined,
  ContainerOutlined,
  PicCenterOutlined,
  DesktopOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./menus.scss";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "antd/lib/menu/MenuItem";

const LeftMenu = () => {
  const menus = [
    {
      title: "Trang Chủ",
      path: "/home",
      icon: HomeOutlined,
    },
    {
      title: "Quản lý vé",
      path: "/ticket",
      icon: PicCenterOutlined,
    },
    {
      title: "Đối soát vé",
      path: "/check",
      icon: ContainerOutlined,
    },
    // {
    //   title: "Danh sách sự kiện",
    //   path: "/event",
    //   icon: BarsOutlined,
    // },
    // {
    //   title: "Quản lý Thiết bị",
    //   path: "/equiment",
    //   icon: DesktopOutlined,
    // },
    {
      title: "Cài đặt",
      path: "/setting",
      icon: SettingOutlined,
    },
  ];
  const { pathname } = useLocation();
  const activeMenu = menus.findIndex((item) => item.path === pathname);
  const menuRef = useRef<MenuItem | any | null>(null);


  useEffect(() => {}, []);

  const handleActive = () => {
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
                index === activeMenu ? "active" : ""
              }`}
              style={{padding: 0, lineHeight: '56px'}}
              key={index}
              icon={<item.icon />}
            >
              <Link className="menus__list__item__title" to={item.path}>
                <span
                  className={`${
                    index === activeMenu ? "active-title" : ""
                  }`}
                >
                  {item.title}
                </span>
              </Link>
          
            </Menu.Item>
          ))}
        </Menu>
            <span className='menus__list__service'>Gói dịch vụ</span>
      </div>
    </div>
  );
};

export default LeftMenu;
