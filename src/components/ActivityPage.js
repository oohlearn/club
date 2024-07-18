import { Col, Row, Flex, Space, Divider, Table, Button, Input, Form, Select } from "antd";
import { QuestionCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";

import styled from "styled-components";
import TitleComponent from "./TitleComponent";
import React, { useContext, useEffect, useRef, useState } from "react";
const selectOptions = Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: i + 1 }));

const TicketTable = ({ dataSource, handleTicketChange, resetTicketCounts }) => {
  const columns = [
    {
      title: "種類",
      dataIndex: "category",
      key: "category",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "價格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "優惠說明",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          票數
          <Button onClick={resetTicketCounts} type="link" danger>
            清除資料
          </Button>
        </div>
      ),
      dataIndex: "ticket_amount",
      key: "ticket_amount",
      render: (text, record) => (
        <Select
          defaultValue={0}
          style={{ width: 120 }}
          options={selectOptions}
          value={record.ticket_amount}
          onChange={(value) => handleTicketChange(record.key, value)}
          disabled={record.disabled}
        />
      ),
    },
    {
      title: "選位方式（目前暫不開放自行選位）",
      key: "action",
      render: (_, record) => (
        <Space size="large">
          <Button type="default" block style={{ background: "pink" }} disabled>
            自行選位
          </Button>
          <Button type="default" block style={{ background: "orange" }}>
            電腦配位
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ hideOnSinglePage: "true" }}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
        ),
        expandIcon: ({ record, onExpand }) =>
          record.description !== "" ? (
            <QuestionCircleTwoTone onClick={(e) => onExpand(record, e)} />
          ) : (
            <></>
          ),
      }}
    />
  );
};

function ActivityPage() {
  const [dataSource, setDataSource] = useState([
    {
      key: "basic",
      category: "普通票",
      price: "100元",
      description: "",
    },
    {
      key: "rock",
      category: "搖滾區",
      price: "500元",
      description: "",
    },
    {
      key: "vip",
      category: "VIP",
      price: "0元",
      description: "請出示貴賓邀請卡，可免費索取節目單",
    },
    {
      key: "elder",
      category: "敬老票",
      discount: "8折優惠",
      price: "80元",
      description: "請攜帶相關證明文件",
    },
  ]);

  const handleTicketChange = (key, value) => {
    setDataSource((prevData) => {
      const newData = prevData.map((item) => {
        if (item.key === key) {
          return { ...item, ticket_amount: value };
        } else {
          return { ...item, ticket_amount: 0, disabled: value !== 0 };
        }
      });
      return newData;
    });
  };

  const resetTicketCounts = () => {
    setDataSource((prevData) =>
      prevData.map((item) => ({
        ...item,
        ticket_amount: 0,
        disabled: false,
      }))
    );
  };
  return (
    <>
      <Row style={{ textAlign: "center", justifyContent: "center" }}>
        <TitleComponent label="| 2024年度公演 |" />
      </Row>
      <br />
      <Row gutter={20}>
        <Col span={6}>
          <img
            style={{ width: "100%", height: "auto" }}
            src="https://plus.unsplash.com/premium_photo-1681593282801-5e6ae37eac2a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Col>
        <Col span={18}>
          <h6>時間 | 2024/7/1 1400-1700</h6>
          <h6>地點 | 蘆洲功學社音樂廳</h6>
          <h6>票價 | 100/200/500</h6>
          <Divider orientation="left" orientationMargin={0}>
            <strong>節目介紹</strong>
          </Divider>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae unde sed voluptatibus
            corporis eveniet, dolore possimus. Itaque autem nostrum eligendi laudantium nemo
            perspiciatis nam dolorem, earum eaque tempora modi reiciendis?
          </p>
          <Divider orientation="left" orientationMargin={0}>
            <strong>演出曲目</strong>
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
      <Divider>
        <h5 style={{ fontWeight: "bold" }}>購票說明</h5>
      </Divider>
      <Row>
        <br />
        <ol>
          <li>
            請先選擇欲購票價的<strong>『張數』</strong>，再點選<strong>『選位方式』</strong>
            ，即可進入訂購確認頁面。
          </li>
          <li>單次購票僅能選擇單一票種，若須購買不同票種，請再次下單購買。</li>
        </ol>
      </Row>
      <Row justify={"center"}>
        <TicketTable
          dataSource={dataSource}
          handleTicketChange={handleTicketChange}
          resetTicketCounts={resetTicketCounts}
        />
      </Row>
    </>
  );
}
export default ActivityPage;
