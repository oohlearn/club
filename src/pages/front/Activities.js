import ArticleCard from "../../components/ArticleCard";
import MainArticle from "../../components/MainArticle";
import { Col, Flex, Button, Divider } from "antd";
import Activity from "../../components/Activity";

import styled from "styled-components";
import SearchBar from "../../components/SearchBar";

const StyleActivities = styled.div`
  h2 {
    justify-content: center;
    display: flex;
  }
`;

function Activities() {
  return (
    <StyleActivities>
      <Flex gap="middle" vertical>
        <div className="row">
          <Divider orientation="center">
            <h2>近期活動</h2>
          </Divider>
        </div>
        <SearchBar />

        <div className="row">
          <p>
            臺北市南港區成德國民小學國樂團創立於2014年初，由李佳馨老師、彭彥翰老師擔任指導老師暨樂團指揮，為南港區新興之國小國樂團。本團招收一至六年級學生，目前有70位社員、12位分部老師。本團合奏及各分部老師皆畢業於音樂系科班，年輕、充滿活力、專業經驗豐富，帶領成德國樂學子賣力學習。社團極力爭取各式表演機會，連年榮獲臺北市及全國學生音樂比賽絲竹室內樂、國樂合奏優等，演出經驗豐富，備受社區及親師生之肯定。
          </p>
        </div>
      </Flex>

      <Activity />
    </StyleActivities>
  );
}

export default Activities;
