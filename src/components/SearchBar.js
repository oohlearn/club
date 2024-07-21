import React, { useState } from "react";
import { Input, Space, Button } from "antd";
import styled from "styled-components";
import OpenCalendar from "./Calendar";

const { Search } = Input;

const StyleSearch = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 20px;
  white-space: nowrap;
  align-items: center;
`;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => {
  const [showCalendar, setCalendar] = useState(false);
  const openDatePicker = () => {
    setCalendar((preState) => !preState);
  };
  return (
    <StyleSearch>
      <Space direction="vertical">
        <SearchContainer>
          <Search placeholder="活動標題、關鍵字" onSearch={onSearch} enterButton width={"200px"} />
          <span>依時間搜尋：</span>
          <OpenCalendar />
        </SearchContainer>
      </Space>
      <br />
    </StyleSearch>
  );
};
export default SearchBar;
