import Footer from "../../components/Footer";
import IndexStory from "../../components/IndexStory";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Col, Row, Flex } from "antd";
import { Outlet } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import MainArticle from "../../components/MainArticle";

function FrontLayout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <IndexStory />
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-4">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontLayout;
