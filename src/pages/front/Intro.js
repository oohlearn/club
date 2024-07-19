import TitleComponent from "../../components/TitleComponent";
import { Col, Divider, Row, Table, List, Space } from "antd";
import React from "react";

import styled from "styled-components";

const StyleIntro = styled.div`
  h2 {
    justify-content: center;
    display: flex;
  }
  img {
    justify-content: center;
    display: flex;
  }
`;

const conductorData = [
  {
    title: "Con1",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    url: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
  },
  {
    title: "Con2",
    description: "hi",
    content: "content",
  },
];

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
  return <Table columns={columns} pagination={{ hideOnSinglePage: "true" }} dataSource={data} />;
};
const data = [
  {
    date: "112年10月",
    experience: "參與臺北市學生音樂比賽國小絲竹室內樂B組及國樂合奏B組比賽，榮獲雙料優等",
  },
  { date: "112年9月", experience: "參加天母SOGO中秋音樂會演出" },
  { date: "112年6月", experience: "於成德國小樂齡教室舉辦【111學年度第2學期期末成果發表音樂會】" },
  { date: "112年5月", experience: "絲竹樂團赴日本大阪中華學校辦理藝術參訪交流活動" },
  {
    date: "112年3月",
    experience: "參與全國學生音樂比賽國小絲竹室內樂B組及國樂合奏B組比賽，榮獲雙料優等",
  },
];
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
          <img src="./images/logo.jpg" alt="" width={"60%"} height={"auto"} />
        </Col>
        <Col span={18}>
          <p>
            臺北市南港區成德國民小學國樂團創立於2014年初，由李佳馨老師、彭彥翰老師擔任指導老師暨樂團指揮，為南港區新興之國小國樂團。
          </p>
          <p>
            本團招收一至六年級學生，目前有70位社員、12位分部老師。本團合奏及各分部老師皆畢業於音樂系科班，年輕、充滿活力、專業經驗豐富，帶領成德國樂學子賣力學習。社團極力爭取各式表演機會，連年榮獲臺北市及全國學生音樂比賽絲竹室內樂、國樂合奏優等，演出經驗豐富，備受社區及親師生之肯定。
          </p>
        </Col>
      </Row>
      <Divider>
        <h5>指揮老師</h5>
      </Divider>

      <Row>
        <ConductorList />
      </Row>
      <img
        src="https://images.unsplash.com/photo-1579702493660-c0ec1bd69131?q=80&w=2485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={"60%"}
        height={"auto"}
      />

      <Divider>
        <h5>歷年重要演出、比賽經歷</h5>
      </Divider>
      <ExperiencesTable />
    </StyleIntro>
  );
}

export default IntroPage;
