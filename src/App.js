import { Routes, Route } from "react-router-dom";
import Home from "./pages/front/Home";
import FrontLayout from "./pages/front/FontLayout";
import IntroPage from "./pages/front/Intro";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="intro" element={<IntroPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
