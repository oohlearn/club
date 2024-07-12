import React, { useState } from "react";
import { ShopOutlined, PhoneOutlined, StarOutlined } from "@ant-design/icons";
import { Menu, Col, Row, Flex } from "antd";

function Navbar() {
  const items = [
    {
      label: "周邊商城",
      key: "mail",
      icon: <ShopOutlined />,
    },
    {
      label: "活動購票",
      key: "app",
      icon: <StarOutlined />,
    },
    {
      label: "聯絡我們",
      key: "chat",
      icon: <PhoneOutlined />,
    },
  ];
  const box = {
    width: "100%",
    height: "120",
    justify: "center",
    align: "center",
  };
  return (
    <>
      <div className="row ">
        <div className="col-3">
          <img src="/images/logo.jpg" alt="LOG" height={75} width={75} />
        </div>
        <div className="col-9">
          <Menu mode="horizontal" items={items} />
        </div>
      </div>
    </>
  );
}
export default Navbar;
