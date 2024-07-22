import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, ConfigProvider, Row, Select, Space, Flex, Divider, Button } from "antd";
import styled from "styled-components";
import { albumsData } from "../../textFile";

const StyleLink = styled(Link)`
  text-decoration: none;
`;

const { Meta } = Card;
const selectOptions = Array.from({ length: 11 }, (_, i) => ({ value: i, label: i }));

function ProductComponent() {
  return (
    <>
      <Row justify={"space-evenly"}>
        {albumsData.map((album) => (
          <Col key={album.index}>
            <StyleLink to={`/shop/${album.index}`}>
              <ConfigProvider
                theme={{
                  token: {
                    paddingLG: 10,
                    borderRadius: 0,
                  },
                }}
              >
                <Card
                  hoverable
                  style={{
                    width: 100,
                    height: "auto",
                    padding: 2,
                  }}
                  cover={<img alt="example" src={album.indexImg} />}
                >
                  <Meta
                    title={album.title}
                    style={{
                      textAlign: "center",
                    }}
                  />
                  <Meta description={album.date} style={{ textAlign: "end" }} />
                </Card>
              </ConfigProvider>
            </StyleLink>
          </Col>
        ))}
      </Row>
    </>
  );
}

const ShoppingListComponent = () => (
  <Flex align="center" justify="space-between">
    <Col span={1}>
      <a href="#" style={{ textDecoration: "none" }}>
        X
      </a>
    </Col>
    <Col span={2}>
      <img src="/images/logo.jpg" alt="" width={"30px"} />
    </Col>
    <Col span={9} offset={1}>
      <Col>2023演出DVD</Col>
      <Col style={{ color: "gray", fontSize: "small" }}>NT$150</Col>
    </Col>
    <Col span={5}>
      <ConfigProvider
        theme={{
          components: {
            Select: { optionPadding: 5 },
          },
        }}
      >
        <Select size="small" defaultValue={0} options={selectOptions}></Select>
      </ConfigProvider>
    </Col>
    <Col span={6}>小計：300</Col>
  </Flex>
);

const ShoppingList = () => (
  <Space direction="vertical" size={16}>
    <Card
      title="我的購物車"
      extra={<a href="#">More</a>}
      style={{
        width: 360,
        background: "yellow",
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <ShoppingListComponent />
      ))}
      <br />
      <Row>
        <Col span={17}>
          <Col>宅配運費</Col>
          <Col style={{ color: "gray", fontSize: "small" }}>（周邊商品滿500元，免運費）</Col>
        </Col>
        <Col span={6} offset={1}>
          小計：70
        </Col>
      </Row>

      <Divider />
      <Row justify={"end"}>
        <Col>總金額： NT$ 300</Col>
      </Row>
    </Card>
  </Space>
);

function ShopComponent() {
  return (
    <>
      <Flex>
        <Col span={12}>
          <ProductComponent />
        </Col>
        <Col span={10}>
          <ShoppingList />
          <Flex justify="end" gap="large">
            <Button type="default">購票</Button>

            <Button type="primary">結帳</Button>
          </Flex>
        </Col>
      </Flex>
    </>
  );
}
export default ShopComponent;
