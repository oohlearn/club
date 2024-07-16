import IndexStory from "../../components/IndexStory";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Foot from "../../components/Foot";
import { Outlet } from "react-router-dom";

import React from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import FloatBtn from "../../components/FloatBtn";
const { Header, Content, Sider } = Layout;

const FontLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
      <IndexStory />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sidebar />
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <h3>我是標題</h3>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Foot />
      <FloatBtn />
    </Layout>
  );
};
export default FontLayout;
