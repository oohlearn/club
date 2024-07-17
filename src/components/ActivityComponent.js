import styled from "styled-components";
import { Row, Col, Space } from "antd";
import React from "react";

const ActivityContainer = styled.div`
  img {
    width: 150px;
  }
  .info {
    margin-top: 20px;
  }
`;

function ActivityComponent() {
  return (
    <ActivityContainer>
      <Row gutter={30}>
        <Col span={8}>
          <img src="./images/poster.jpg" alt="" />
        </Col>
        <Col className="info" span={16}>
          <h3>Title</h3>
          <h5>2024.6.30 - 國家音樂廳</h5>
          <h5 style={{ color: "orange" }}>票價：200元/300元</h5>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nemo consequuntur
            facere eaque laudantium? Numquam, sdam.
          </p>
        </Col>
      </Row>
    </ActivityContainer>
  );
}

export default ActivityComponent;
