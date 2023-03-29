import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RecentPublications from "./pages/recentPublications/RecentPublications";
import Upload from "./pages/upload/Upload";
import Profile from "./pages/profile/Profile";
import Projects from "./pages/projects/Projects";

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
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
