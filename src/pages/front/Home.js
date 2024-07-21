import MainArticle from "../../components/MainArticle";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Button, List, Skeleton, Col, Flex, Row } from "antd";
import { Link } from "react-router-dom";

const StyleLink = styled(Link)`
  text-decoration: none;
`;
const newsData = [
  {
    index: 1,
    title: "News1",
    content:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
    date: "2024.2.1",
  },
  {
    index: 2,
    title: "News2",
    content:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
    date: "2024.3.1",
  },
  {
    index: 3,
    title: "News3",
    content:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
    date: "2024.4.1",
  },
  {
    index: 4,
    title: "News4",
    content:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
    date: "2024.5.1",
  },
  {
    index: 5,
    title: "News5",
    content:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
    date: "2024.6.1",
  },
];
function Home() {
  // 渲染API抓回的資料，目前用不到
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  // useEffect(() => {
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setInitLoading(false);
  //       setData(res.results);
  //       setList(res.results);
  //     });
  // }, []);
  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     data.concat(
  //       [...new Array(count)].map(() => ({
  //         loading: true,
  //         name: {},
  //         picture: {},
  //       }))
  //     )
  //   );
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newData = data.concat(res.results);
  //       setData(newData);
  //       setList(newData);
  //       setLoading(false);
  //       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //       // In real scene, you can using public method of react-virtualized:
  //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //       window.dispatchEvent(new Event("resize"));
  //     });
  // };
  // const loadMore =
  //   !initLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: "32px",
  //       }}
  //     >
  //       <Button onClick={onLoadMore}>loading more</Button>
  //     </div>
  //   ) : null;
  return (
    <>
      <Col>
        <MainArticle />
      </Col>
      <br />
      <List
        className="demo-loadmore-list"
        // loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={newsData}
        renderItem={(news) => (
          <Row>
            <Skeleton title={false} loading={news.loading} active>
              <Col span={4}>
                <List.Item>{news.date}</List.Item>
              </Col>
              <Col span={16}>
                <List.Item>
                  <List.Item.Meta
                    title={
                      <strong>
                        <StyleLink to={`/news/${news.index}`}>{news.title}</StyleLink>
                      </strong>
                    }
                    description={news.content}
                  />
                </List.Item>
              </Col>
              <Col span={4}>
                <List.Item>
                  <StyleLink to={`/news/${news.index}`}>more...</StyleLink>
                </List.Item>
              </Col>
            </Skeleton>
          </Row>
        )}
      />
    </>
  );
}

export default Home;
