import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import styled from "styled-components";
const { Meta } = Card;

const StyleLink = styled(Link)`
  text-decoration: none;
`;

function AlbumsComponent() {
  return (
    <Row gutter={16}>
      {Array.from({ length: 7 }).map((_, index) => (
        <Col span={8} key={index}>
          <StyleLink to={`/albums/${index}`}>
            <Card
              hoverable
              style={{
                width: 200,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </StyleLink>
        </Col>
      ))}
    </Row>
  );
}
export default AlbumsComponent;
