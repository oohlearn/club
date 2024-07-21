import React from "react";
import { Button, List, Skeleton, Col, Flex, Row } from "antd";

function MainArticle() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src="/images/home2.png" alt="" width="100%" />
          </div>
          <div className="col-7">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis enim eius nam,
              laboriosam eaque corporis vitae ea natus.
            </p>
            <Row align={"bottom"}>
              <Button type="primary">購票去!</Button>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainArticle;
