import React from "react";
import { Button, Card, Flex, Typography } from "antd";
const cardStyle = {
  width: "80%",
  justify: "center",
};
const imgStyle = {
  display: "block",
  width: "30%",
};
function IndexStory() {
  return (
    <div className="container">
      <Card
        hoverable
        style={cardStyle}
        styles={{
          body: {
            padding: 0,
            overflow: "hidden",
          },
        }}
      >
        <Flex justify="space-between">
          <img alt="poster" src="/images/home.jpg" width={125} height={200} style={imgStyle} />
          <Flex
            vertical
            align="flex-end"
            justify="space-between"
            style={{
              padding: 32,
            }}
          >
            <Typography.Title level={3}>十周年團慶音樂會</Typography.Title>
            <Button type="primary" href="https://ant.design" target="_blank">
              購票去
            </Button>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
}
export default IndexStory;
