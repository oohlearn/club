import TitleComponent from "../../components/TitleComponent";
import { Col, Divider, Row, Table, List } from "antd";
import React from "react";
import { conductorData, experiencesData, IntroductionText } from "../../textFile";
import styled from "styled-components";

const StyleIntro = styled.div`
  img {
    justify-content: center;
    display: flex;
  }
`;

const ConductorList = () => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={conductorData}
    renderItem={(item) => (
      <List.Item key={item.title} extra={<img width={300} alt="logo" src={item.url} />}>
        <List.Item.Meta
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);

const ExperiencesTable = () => {
  const columns = [
    {
      title: "時間",
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "近年重要演出或比賽經歷",
      dataIndex: "experience",
      key: "experience",
    },
  ];
  return (
    <Table
      columns={columns}
      pagination={{ hideOnSinglePage: "true" }}
      dataSource={experiencesData}
    />
  );
};

function IntroPage() {
  return (
    <StyleIntro>
      <TitleComponent label="團體介紹" />
      <Row justify={"center"}>
        <img src="./images/團照.jpg" alt="" width={"80%"} height={"auto"} />
      </Row>
      <br />
      <Row gutter={20}>
        <Col span={6}>
          <img src="./images/logo.jpg" alt="" width={"80%"} height={"auto"} />
        </Col>
        <Col span={18}>
          <IntroductionText />
        </Col>
      </Row>
      <Divider>
        <h5>指揮老師</h5>
      </Divider>
      <Row>
        <ConductorList />
      </Row>

      <Divider>
        <h5>歷年重要演出、比賽經歷</h5>
      </Divider>
      <ExperiencesTable />
    </StyleIntro>
  );
}

export default IntroPage;
