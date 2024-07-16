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
        團體介紹
      </Link>
    ),
  },
  {
    key: "3",
    icon: <CalendarOutlined />,
    label: (
      <Link to="/active" style={{ textDecoration: "none" }}>
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
    label: "精華影片",
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);
function Sidebar() {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
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
