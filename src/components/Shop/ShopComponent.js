import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, ConfigProvider, Row, Space } from "antd";
import styled from "styled-components";
import { albumsData } from "../../textFile";

const ShoppingList = () => (
  <Space direction="vertical" size={16}>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);

function ShopComponent() {
  return (
    <>
      <Row gutter={8}>
        {/* <Col span={20}>
          {albumsData.map((album) => (
            <Col span={6} key={album.index}>
              <StyleLink to={`/albums/${album.index}`}>
                <ConfigProvider
                  theme={{
                    token: {
                      paddingLG: 10,
                    },
                  }}
                >
                  <Card
                    hoverable
                    style={{
                      width: 100,
                      height: "auto",
                      padding: 0,
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
        </Col> */}
        <Col span={14}>col</Col>
        <Col span={10}>
          <ShoppingList />
        </Col>
      </Row>
    </>
  );
}
export default ShopComponent;
