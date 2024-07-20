import styled from "styled-components";
import { Row, Col } from "antd";
import React, { useState } from "react";
import { videosData } from "../../textFile";
import VideoModal from "./VideoModal";

const VideoContainer = styled.div`
  img {
    width: 150px;
  }
  .info {
    margin-top: 20px;
  }
`;

function VideoComponent() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <VideoContainer>
      {videosData.map((video) => {
        return (
          <a href={video.url} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            <Row gutter={30}>
              <Col span={12}>
                <img src="./images/poster.jpg" alt="" />
              </Col>
              <Col className="info" span={12}>
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
              <button onClick={showLoading}>Open</button>
            </Row>
          </a>
        );
      })}
      <VideoModal loading={loading} setOpen={setOpen} open={open}></VideoModal>
    </VideoContainer>
  );
}

export default VideoComponent;
