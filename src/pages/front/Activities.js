import { Col, Flex, Button, Divider, Space, Row } from "antd";
import ActivityComponent from "../../components/ActivityComponent";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import TitleComponent from "../../components/TitleComponent";
import PaginationComponent from "../../components/Pagenation";
import { Link } from "react-router-dom";

const StylePagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
`;
function Activities() {
  return (
    <>
      <TitleComponent label="近期活動" />

      <Space direction="vertical" size="large">
        <SearchBar />

        <Row>
          <StyleLink to={"/activity/1"}>
            <ActivityComponent />
          </StyleLink>
        </Row>
        <Row>
          <ActivityComponent />
        </Row>
      </Space>
      <StylePagination>
        <PaginationComponent />
      </StylePagination>
    </>
  );
}

export default Activities;
