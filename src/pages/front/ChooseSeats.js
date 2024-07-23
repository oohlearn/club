import styled from "styled-components";
import TitleComponent from "../../components/TitleComponent";
import React, { useState } from "react";
import { Button, Col, Row, Select, Steps, message, theme } from "antd";
import ShopComponent from "../../components/Shop/ShopComponent";
import { FirstStep } from "../../components/Order/FirstStep";

const steps = [
  {
    title: "確認座位及張數",
    content: <FirstStep />,
  },
  {
    title: "確認訂單內容",
    content: "Second-content",
  },
  {
    title: "填寫訂購人資料及繳費",
    content: "Second-content",
  },
];

const StepsComponent = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 45,
          justifyContent: "center",
          display: "flex",
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}

        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("Processing complete!")}>
            Done
          </Button>
        )}
      </div>
    </>
  );
};

function ChooseSeats() {
  return (
    <>
      <StepsComponent />
      <br />
    </>
  );
}

export default ChooseSeats;
