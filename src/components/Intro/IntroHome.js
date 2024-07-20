import { Col, Divider, Row, Table, List, Menu, Space } from "antd";
import React, { useState } from "react";
import { conductorData, experiencesData, IntroductionText } from "../../textFile";

function IntroHome() {
  return (
    <>
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
    </>
  );
}

export default IntroHome;
