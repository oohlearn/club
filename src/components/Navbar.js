import React, { useState } from "react";
import IndexStory from "./IndexStory";

import { ShopOutlined, PhoneOutlined, StarOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
const { Header } = Layout;

function Navbar() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
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

  return (
    <Header
      theme="light"
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <a href={"/"}>
        <img src="/images/logo.jpg" alt="" width="80px" />
      </a>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: "flex-end",
        }}
      />
    </Header>
  );
}
export default Navbar;
