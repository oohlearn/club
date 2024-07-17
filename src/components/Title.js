import { Col, Flex, Button, Divider, Space, Row } from "antd";
import styled from "styled-components";

const StyledRow = styled(Row)`
  justify-content: center;
  text-align: center;
`;

function Title({ label }) {
  return (
    <StyledRow>
      <Col>
        <Divider>
          <h2>{label}</h2>
        </Divider>
      </Col>
    </StyledRow>
  );
}

export default Title;
