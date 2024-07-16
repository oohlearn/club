import React, { useState } from "react";
import { DatePicker, Radio, Space } from "antd";
const { RangePicker } = DatePicker;
function OpenCalendar() {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker />
    </Space>
  );
}
export default OpenCalendar;
