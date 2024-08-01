import React from "react";
import { Button, Form, Input, Row, Select, Col, Flex, Divider } from "antd";
import TitleComponent from "../TitleComponent";
import styled from "styled-components";
import AddressSelect from "./Address";
// const layout = {
//   labelCol: {
//     span: 10,
//   },
//   wrapperCol: {
//     span: 14,
//   },
// };

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

const Title = ({ title }) => {
  return (
    <Divider orientation="left">
      <h5>{title}</h5>
    </Divider>
  );
};

export const ThirdStep = () => (
  <>
    {/* <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Divider orientation="left">聯絡人資料</Divider>
      <div>
        <Form.Item name={["user", "name"]} label="姓名">
          <Input />
        </Form.Item>
      </div>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "phone"]} label="手機">
        <Input />
      </Form.Item>
      <Divider orientation="left">取票方式</Divider>
      <div>
        <h6>電子票券</h6>
      </div>
      <div>
        <h6>請至信箱收信，以QRcode驗票入場</h6>
      </div>
      <Form.Item
        name={["user", "category"]}
        label="種類"
        rules={[
          {
            required: true,
            message: "請填寫種類，或選『其他』",
          },
        ]}
      >
        <Select
          style={{
            width: "100%",
          }}
          options={[
            {
              value: "qActivity",
              label: "活動諮詢（購票、演出內容）",
            },
            {
              value: "qShopping",
              label: "周邊商品問題（商品細節、訂單、退換貨）",
            },
            {
              value: "qCooperate",
              label: "合作洽談（商演、商品聯名）",
            },
            {
              value: "qAdvice",
              label: "建議或申訴",
            },
            {
              value: "qWebsite",
              label: "網頁瀏覽問題反映",
            },
            {
              value: "qOther",
              label: "其他 - 請於標題或內容詳述",
            },
          ]}
        />
      </Form.Item>

      <Form.Item
        name={["user", "title"]}
        label="標題"
        rules={[
          {
            required: true,
            message: "請填寫標題",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "introduction"]}
        label="內容"
        rules={[
          {
            required: true,
            message: "請填寫內容",
          },
        ]}
      >
        <Input.TextArea rows={5} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          送出
        </Button>
      </Form.Item>
    </Form> */}
    <Title title="聯絡人資料" />
    <Form>
      <Form.Item
        label="訂購人姓名"
        name="name"
        wrapperCol={{ span: 10 }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="訂購人Email"
        name="email"
        wrapperCol={{ span: 10 }}
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="訂購人手機"
        name="phone"
        wrapperCol={{ span: 10 }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
    <Title title="取票方式" />
    <Row>
      <h6>電子票券</h6>
    </Row>
    <Row>
      <h6>請至信箱收信，以信中之QRCode驗票入場</h6>
    </Row>
    <Title title="周邊商品宅配地址" />
    <Form>
      <Form.Item
        label="郵遞區號"
        name="zip"
        wrapperCol={{ span: 5 }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <AddressSelect />
      </Form.Item>
    </Form>
  </>
);
