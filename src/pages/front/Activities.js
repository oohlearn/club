import { Col, Flex, Button, Divider, Space, Row } from "antd";
import Activity from "../../components/Activity";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";

const StyleActivities = styled.div``;

function Activities() {
  return (
    <StyleActivities>
      <Title label="近期活動" />

      <SearchBar />
      <Space direction="vertical" size="large">
        <Row>
          <Activity />
        </Row>
        <Row>
          <Activity />
        </Row>
      </Space>
    </StyleActivities>
  );
}

export default Activities;
