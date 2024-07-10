import Footer from "../../components/Footer";
import IndexStory from "../../components/IndexStory";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Flex } from "antd";
function FrontLayout() {
  return (
    <>
      <Navbar />
      <IndexStory />
      <Sidebar />
      <div></div>
      <Footer />

      <div className="bg-dark">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between text-white py-4">
            <Flex justify="center">
              <p className="mb-0">© 2020 LOGO All Rights Reserved.</p>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontLayout;
