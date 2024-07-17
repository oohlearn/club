import { Col, Row, Flex, Space, Divider, Table, Tag } from "antd";
import styled from "styled-components";
import TitleComponent from "./TitleComponent";

import React from "react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
];
const TicketTable = () => (
  <Table columns={columns} dataSource={data} pagination={{ hideOnSinglePage: "true" }} />
);

function ActivityPage() {
  return (
    <>
      <Row style={{ textAlign: "center", justifyContent: "center" }}>
        <TitleComponent label="| 2024年度公演 |" />
      </Row>
      <br />
      <Row gutter={20}>
        <Col span={7}>
          <img
            style={{ width: "100%", height: "auto" }}
            src="https://plus.unsplash.com/premium_photo-1681593282801-5e6ae37eac2a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Col>
        <Col span={17}>
          <h6>時間 | 2024/7/1 1400-1700</h6>
          <h6>地點 | 蘆洲功學社音樂廳</h6>
          <h6>票價 | 100/200/500</h6>
          <Divider orientation="left" orientationMargin={0}>
            節目介紹
          </Divider>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae unde sed voluptatibus
            corporis eveniet, dolore possimus. Itaque autem nostrum eligendi laudantium nemo
            perspiciatis nam dolorem, earum eaque tempora modi reiciendis?
          </p>
          <Divider orientation="left" orientationMargin={0}>
            演出曲目
          </Divider>
          <ul style={{ listStyleType: "none", fontSize: "medium" }}>
            <li>
              花傘與蘭花
              <Divider type="vertical" /> 朱嘯林
            </li>
            <li>
              德音
              <Divider type="vertical" />
              李博禪{" "}
            </li>
            <li>
              那些年
              <Divider type="vertical" />
              邱士峰
            </li>
            <li>
              彩龍船
              <Divider type="vertical" />
              瞿春泉
            </li>
            <li>
              抒情變奏曲III
              <Divider type="vertical" />
              劉長遠
            </li>
            <li>
              成德國小校歌
              <Divider type="vertical" />
              林明學
            </li>
            <li>
              《走過成德》
              <Divider type="vertical" />
              十週年紀錄片
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <TicketTable />
      </Row>
    </>
  );
}
export default ActivityPage;
