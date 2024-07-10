import React, { useState } from "react";
import {
  AppstoreOutlined,
  BellOutlined,
  YoutubeOutlined,
  CalendarOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    key: "1",
    icon: <BellOutlined />,
    label: "最新消息",
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: "團體介紹",
  },
  {
    key: "3",
    icon: <CalendarOutlined />,
    label: "近期活動",
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
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["231"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
  );
}
export default Sidebar;
