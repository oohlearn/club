import { Routes, Route } from "react-router-dom";
import Home from "./pages/front/Home";
import FrontLayout from "./pages/front/FontLayout";
import IntroPage from "./pages/front/Intro";
import Activities from "./pages/front/Activities";
import ActivityPage from "./components/Activities/ActivityPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="intro" element={<IntroPage />}></Route>
          <Route path="activities" element={<Activities />}></Route>
          <Route path="activities/:activityId" element={<ActivityPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
