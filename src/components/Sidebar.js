import React, { useState } from "react";
import {
  AppstoreOutlined,
  BellOutlined,
  YoutubeOutlined,
  CalendarOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { Menu, Layout, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <BellOutlined />,
    label: "最新消息",
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: (
      <Link to="/intro" style={{ textDecoration: "none" }}>
        關於我們
      </Link>
    ),
  },
  {
    key: "3",
    icon: <CalendarOutlined />,
    label: (
      <Link to="/activities" style={{ textDecoration: "none" }}>
        近期活動
      </Link>
    ),
  },
  {
    key: "4",
    icon: <CameraOutlined />,
    label: "歷史紀錄",
  },
  {
    key: "5",
    icon: <YoutubeOutlined />,
    label: (
      <Link to="/videos" style={{ textDecoration: "none" }}>
        精華影片
      </Link>
    ),
  },
];

function Sidebar() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider
      style={{
        background: colorBgContainer,
      }}
      width={200}
    >
      <Menu
        mode="inline"
        style={{
          height: "100%",
        }}
        items={items}
      />
    </Sider>
  );
}
export default Sidebar;
