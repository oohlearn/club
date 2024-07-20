import styled from "styled-components";
import { Row, Col } from "antd";
import React, { useState } from "react";
import VideoModal from "./VideoModal";
import { videosData } from "../../textFile";

const VideoContainer = styled.div`
  img {
    width: 300px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 10px;
  }
  .info {
    margin-top: 20px;
  }
`;

function VideoComponent() {
  return (
    <VideoContainer>
      {videosData.map((video) => (
        <a href={video.url} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
          <Row gutter={30}>
            <Col span={10}>
              <img src={video.img} alt="" />
            </Col>
            <Col className="info" span={14}>
              <h3>{video.title}</h3>
              <h5>演出者：{video.performer}</h5>
              <h5>
                {video.date} - {video.place}
              </h5>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nemo consequuntur
                facere eaque laudantium? Numquam, sdam.
              </p>
            </Col>
          </Row>
          <br />
        </a>
      ))}
    </VideoContainer>
  );
}

export default VideoComponent;
