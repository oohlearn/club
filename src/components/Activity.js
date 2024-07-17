import styled from "styled-components";
import { Row, Col, Space } from "antd";

const ActivityContainer = styled.div`
  img {
    width: 150px;
  }
  .info {
    margin-top: 20px;
  }
`;

function Activity() {
  return (
    <ActivityContainer>
      <Row gutter={50}>
        <Col>
          <img src="./images/poster.jpg" alt="" />
        </Col>
        <Col className="info">
          <h3>Title</h3>
          <h5>2024.6.30 - 國家音樂廳</h5>
          <h5 style={{ color: "orange" }}>票價：200元/300元</h5>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nemo consequuntur
              facere eaque laudantium? Numquam, sdam.
            </p>
          </span>
        </Col>
      </Row>
    </ActivityContainer>
  );
}

export default Activity;
