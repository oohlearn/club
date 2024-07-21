import React, { useEffect, useState } from "react";
import { Button, List, Skeleton, Col, Flex, Row, Space } from "antd";
import NewsComponent from "../../components/News/NewsComponent";
import SearchBar from "../../components/SearchBar";
import TitleComponent from "../../components/TitleComponent";

function News() {
  return (
    <>
      <TitleComponent label={"最新消息"} />
      <Space direction="vertical" size="large">
        <SearchBar />

        <NewsComponent />
      </Space>
    </>
  );
}

export default News;
