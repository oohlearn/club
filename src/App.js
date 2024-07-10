import { Button } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/front/Home";
import FrontLayout from "./pages/front/FontLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route path="" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
