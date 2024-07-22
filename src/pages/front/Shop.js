import styled from "styled-components";
import TitleComponent from "../../components/TitleComponent";
import PaginationComponent from "../../components/Pagenation";
import React, { useState } from "react";
import { Input, Space, Button, Col, Row, Select } from "antd";
import ShopComponent from "../../components/Shop/ShopComponent";

const StylePagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

const StyleSearch = styled.div`
  display: flex;
  justify-content: center;
  width: 360px;
`;

const SearchContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => {
  return (
    <StyleSearch>
      <Search placeholder="商品名稱、關鍵字" onSearch={onSearch} enterButton />
    </StyleSearch>
  );
};

const productsData = {
  "服裝、配件": ["紀念T", "棒球帽", "運動襪"],
  文具: ["譜夾", "卡套"],
  歷年演出相關: ["DVD", "CD", "節目單"],
  其他: ["保溫杯", "馬克杯", "帆布包"],
};
const provinceData = ["服裝、配件", "文具", "歷年演出相關", "其他"];
const CategorySearchBar = () => {
  const [cities, setCities] = useState(productsData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(productsData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(productsData[value]);
    setSecondCity(productsData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  return (
    <Space wrap>
      <Select
        defaultValue={provinceData[0]}
        style={{
          width: 180,
        }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
      <Select
        style={{
          width: 180,
        }}
        value={secondCity}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({
          label: city,
          value: city,
        }))}
      />
    </Space>
  );
};

function Shop() {
  return (
    <>
      <TitleComponent label="周邊商品" />
      <Row gutter={20} justify={"center"}>
        <CategorySearchBar />
      </Row>
      <br />
      <Row justify={"center"}>
        <SearchBar />
      </Row>
      <br />
      <Row>
        <ShopComponent />
      </Row>

      <StylePagination>
        <PaginationComponent />
      </StylePagination>
    </>
  );
}

export default Shop;
