import ArticleCard from "../../components/ArticleCard";
import MainArticle from "../../components/MainArticle";
import { Col, Flex } from "antd";

function Home() {
  return (
    <>
      <Col>
        <MainArticle />
      </Col>
      <Flex justify="space-round">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Flex>
    </>
  );
}

export default Home;
