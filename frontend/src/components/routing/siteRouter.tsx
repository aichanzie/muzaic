import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPage from "../../pages/music/music-page";
import PodcastsPage from "../../pages/podcast/podcasts-page";

function SiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MusicPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRouter;
