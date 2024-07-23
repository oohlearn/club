import styled from "styled-components";
import TitleComponent from "../../components/TitleComponent";
import React, { useState } from "react";
import { Col, Row, Card, Divider, Space, Flex } from "antd";
import SeatsImage from "./SeatsImage";

const TicketList = () => (
  <Card
    title="電腦配位"
    style={{
      width: 300,
      background: "orange",
    }}
  >
    <Row align="middle" gutter={5}>
      <Col>票券1：</Col>
      <Col style={{ width: "10px", height: "10px", background: "gray" }}></Col>
      <Col> 100元</Col>
      <Col push={1}> 座號：</Col>
      <Col push={1}> 第 L 排 12 號</Col>
    </Row>

    <Divider />
    <Row justify={"end"}>
      <Col pull={5}>共 2 張</Col>
      <Col>總金額： NT$ 300</Col>
    </Row>
  </Card>
);
export const FirstStep = () => {
  return (
    <div>
      <TitleComponent label="2024巡迴公演-台北場" />
      <Row align={"top"} gutter={15} justify={"start"}>
        <img src="/images/poster.jpg" alt="" style={{ width: "80px" }} />
        <Col push={1}>
          <Col>
            <h6>時間：2024.7.1（一）</h6>
          </Col>
          <Col>
            <h6>地點：國家音樂廳</h6>
          </Col>
          <Col>
            <h6>選擇票價：200元</h6>
          </Col>
          <Col>
            <h6>張數：2張</h6>
          </Col>
        </Col>
      </Row>
      <br />
      <br />
      <br />

      <Row align="center" gutter={100}>
        <Col span={12}>
          <SeatsImage />
        </Col>
        <Col span={12}>
          <TicketList />
        </Col>
      </Row>
    </div>
  );
};
