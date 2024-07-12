import React, { useState } from "react";
import { ShopOutlined, PhoneOutlined, StarOutlined } from "@ant-design/icons";
import { Menu, Col, Row, Flex } from "antd";

function Footer() {
  const items = [
    {
      label: "幹部登入",
      key: "mail",
      icon: <ShopOutlined />,
    },
    {
      label: "幹部註冊",
      key: "app",
      icon: <StarOutlined />,
    },
    {
      label: "聯絡我們",
      key: "chat",
      icon: <PhoneOutlined />,
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <div className="container">
        <Row>
          <Col span={3}>
            <img src="/images/logo.jpg" alt="LOG" height={50} width={50} />
          </Col>
          <Col span={9}>
            <Flex justify="flex-end">
              <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Flex>
          </Col>
        </Row>
        <Flex justify="center">
          <p className="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </Flex>
      </div>
    </>
  );
}
export default Footer;
