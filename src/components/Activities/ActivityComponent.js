import styled from "styled-components";
import { Row, Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { activitiesData } from "../../textFile";

const ActivityContainer = styled.div`
  img {
    width: 150px;
  }
  .info {
    margin-top: 20px;
  }
`;
const StyleLink = styled(Link)`
  text-decoration: none;
`;

function ActivityComponent() {
  return (
    <ActivityContainer>
      {activitiesData.map((activity) => {
        return (
          <StyleLink to={`/activities/${activity.index}`}>
            <Row gutter={30} key={activity.index}>
              <Col span={8}>
                <img src={activity.poster} alt="" />
              </Col>
              <Col className="info" span={16}>
                <h3>{activity.title}</h3>
                <h5>
                  {activity.date} - {activity.place}
                </h5>
                <h5 style={{ color: "orange" }}>票價：{activity.price}</h5>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nemo consequuntur
                  facere eaque laudantium? Numquam, sdam.
                </p>
              </Col>
            </Row>
          </StyleLink>
        );
      })}
    </ActivityContainer>
  );
}

export default ActivityComponent;
