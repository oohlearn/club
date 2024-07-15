import React from "react";
import { Carousel, Flex } from "antd";
import styled from "styled-components";

const CarouselStyle = styled.div`
  .text {
    /* height: 200px; */
    color: aqua;
    /* line-height: 130px; */
  }
  h5 {
    color: blue;
    text-align: left;
  }
  text-align: center;
  .carousel-image {
    height: 200px;
    max-width: 100%;
    width: auto;
    object-fit: contain;
  }
`;

const IndexStory = () => (
  <CarouselStyle>
    <Carousel arrows autoplay>
      <div>
        <Flex justify="center" gap="middle" align="center">
          <img src="./images/home2.png" alt="" className="carousel-image" />
          <h3 className="text">十周年團慶音樂會</h3>
          <div>
            <h5>時間 | 6月30日（日）</h5>
            <h5>地點 | 台北生技園區</h5>
          </div>
        </Flex>
      </div>
      <div>
        <Flex justify="center" gap="middle" align="center">
          <img
            src="https://images.unsplash.com/photo-1720679816618-3fdc3504ac58?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="carousel-image"
          />
          <h3 className="text">十周年紀念品</h3>
          <div>
            <h5>時間 | 6月30日（日）</h5>
            <h5>地點 | 台北生技園區</h5>
          </div>
        </Flex>
      </div>
      <div>
        <Flex justify="center" gap="middle" align="center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="carousel-image"
          />
          <h3 className="text">慶功宴</h3>
          <div>
            <h5>時間 | 6月30日（日）</h5>
            <h5>地點 | 台北生技園區</h5>
          </div>
        </Flex>
      </div>
    </Carousel>
  </CarouselStyle>
);
export default IndexStory;
