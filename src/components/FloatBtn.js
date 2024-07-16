import React from "react";
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const FloatBtn = () => (
  <FloatButton onClick={() => console.log("onClick")} icon={<QuestionCircleOutlined />} />
);
export default FloatBtn;
