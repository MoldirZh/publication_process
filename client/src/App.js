import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RecentPublications from "./pages/recentPublications/projects/RecentPublications";
import Upload from "./pages/upload/Upload";
import Profile from "./pages/profile/Profile";
import Projects from "./pages/projects/Projects";
import RecentPublicationsPapers from "./pages/recentPublications/project/RecentPublicationsPapers";
import RecentPublicationsPaper from "./pages/recentPublications/paper/RecentPublicationsPaper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/recentPublications"
          element={<RecentPublications />}
        ></Route>
        <Route
          path="/recentPublications/project/:id"
          element={<RecentPublicationsPapers />}
        ></Route>
        <Route
          path="/recentPublications/paper/:id"
          element={<RecentPublicationsPaper />}
        ></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
