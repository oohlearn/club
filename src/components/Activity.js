import styled from "styled-components";
import { Row, Col, Space } from "antd";

const ActivityContainer = styled.div`
  img {
    width: 150px;
  }
`;

function Activity() {
  return (
    <ActivityContainer>
      <Row>
        <Col>
          <img src="./images/poster.jpg" alt="" />
        </Col>
        <Col className="info">
          <h3>Title</h3>
          <p>2024.6.30 - 國家音樂廳</p>
          <p>票價：200元/300元</p>
        </Col>
      </Row>
    </ActivityContainer>
  );
}

export default Activity;
