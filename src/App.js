import { Routes, Route } from "react-router-dom";
import Home from "./pages/front/Home";
import FrontLayout from "./pages/front/FontLayout";
import IntroPage from "./pages/front/Intro";
import Activities from "./pages/front/Activities";
import ActivityTicket from "./components/Activities/ActivityTicket";
import IntroHome from "./components/Intro/IntroHome";
import ExperiencesPage from "./components/Intro/Experiences";
import Conductors from "./components/Intro/Conductors";
import Teachers from "./components/Intro/Teachers";
import Videos from "./pages/front/Videos";
import Albums from "./pages/front/Albums";
import AlbumDetail from "./components/Albums/AlbumDetail";
import News from "./pages/front/News";
import NewsDetail from "./components/News/NewsDetail";
import Contact from "./pages/front/Contact";

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
          <Route path="activities/:activityId" element={<ActivityTicket />}></Route>
          <Route path="videos" element={<Videos />}></Route>
          <Route path="albums" element={<Albums />}></Route>
          <Route path="albums/:albumId" element={<AlbumDetail />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="news/:newsId" element={<NewsDetail />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
