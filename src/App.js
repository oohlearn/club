import { Routes, Route } from "react-router-dom";
import Home from "./pages/front/Home";
import FrontLayout from "./pages/front/FontLayout";
import IntroPage from "./pages/front/Intro";
import Activities from "./pages/front/Activities";
import ActivityPage from "./components/Activities/ActivityPage";
import IntroHome from "./components/Intro/IntroHome";
import ExperiencesPage from "./components/Intro/Experiences";
import Conductors from "./components/Intro/Conductors";
import Teachers from "./components/Intro/Teachers";
import Videos from "./pages/front/Videos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="intro" element={<IntroPage />}>
            <Route path="" element={<IntroHome />}></Route>
            <Route path="experiences" element={<ExperiencesPage />}></Route>
            <Route path="conductors" element={<Conductors />}></Route>
            <Route path="teachers" element={<Teachers />}></Route>
          </Route>
          <Route path="activities" element={<Activities />}></Route>
          <Route path="activities/:activityId" element={<ActivityPage />}></Route>
          <Route path="videos" element={<Videos />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
