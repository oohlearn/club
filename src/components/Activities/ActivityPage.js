import { Col, Row, Space, Divider, Table, Button, Select, Checkbox } from "antd";
import { QuestionCircleTwoTone } from "@ant-design/icons";

import styled from "styled-components";
import TitleComponent from "../TitleComponent";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PolicyModal from "../PolicyModal";
import { activitiesData } from "../../textFile";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
function PolicyCheck() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <Checkbox onChange={onChange}>
      我已經閱讀並同意
      <Button type="link" onClick={showLoading}>
        服務條款與隱私權政策
      </Button>
      <PolicyModal loading={loading} setOpen={setOpen} open={open}></PolicyModal>
    </Checkbox>
  );
}

// TODO票券表格
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

const programData = [
  {
    title: "花傘與蘭花",
    composer: "朱嘯林",
  },
  {
    title: "德音",
    composer: "李博禪",
  },
  {
    title: "那些年",
    composer: "邱士峰",
  },
  {
    title: "彩龍船",
    composer: "瞿春泉",
  },
  {
    title: "抒情變奏曲III",
    composer: "劉長遠",
  },
  {
    title: "成德國小校歌",
    composer: "林明學",
  },
  {
    title: "《走過成德》十週年紀錄片",
    composer: "",
  },
];
// TODO曲目表格
const ProgramTable = () => {
  const columns = [
    {
      title: "",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "",
      dataIndex: "composer",
      key: "composer",
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={programData}
      pagination={{ hideOnSinglePage: "true" }}
      size="small"
      showHeader={false}
      bordered={true}
    />
  );
};
function ActivityPage() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const activityIndex = pathSnippets[1] - 1;
  const activityData = activitiesData[activityIndex];
  const [dataSource, setDataSource] = useState(activityData.ticket);

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
          <h6>時間 | {activityData.date}</h6>
          <h6>地點 | {activityData.place}</h6>
          <h6>票價 | {activityData.price}</h6>
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
          <Col span={12}>
            <ProgramTable />
          </Col>
        </Col>
      </Row>
      <Divider orientation="left" orientationMargin={0}>
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
        <PolicyCheck />
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
