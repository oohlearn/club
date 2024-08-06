import styled from "styled-components";
import { Row, Col, Image } from "antd";
import React, { useState } from "react";
import VideoModal from "./VideoModal";
import { videosData } from "../../../textFile";

const VideoContainer = styled.div`
  VideoModal {
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

const LinkStyle = styled.a`
  text-decoration: none;
  transition: color 0.5 ease-in-out;
  h3 {
    color: navy;
  }
  h5 {
    color: black;
  }
  &:hover h3,
  &:hover h5 {
    color: #4096ff;
  }
`;

function VideoComponent() {
  return (
    <VideoContainer>
      {videosData.map((video) => (
        <>
          <Row gutter={30}>
            <Col span={10}>
              <VideoModal video={video} />
              {/* <img src={video.img} alt="" /> */}
            </Col>

            <Col className="info" span={13} push={1}>
              <LinkStyle
                href={video.url}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{video.title}</h3>
                <h5>演出者：{video.performer}</h5>
                <h5>
                  {video.date} - {video.place}
                </h5>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nemo consequuntur
                  facere eaque laudantium? Numquam, sdam.
                </p>
              </LinkStyle>
            </Col>
          </Row>
          <br />
        </>
      ))}
    </VideoContainer>
  );
}

export default VideoComponent;
