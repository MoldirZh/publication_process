import "devextreme/dist/css/dx.light.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Projects from "./pages/projects/Projects";
import Papers from "./pages/papers/Papers";
import MyInvitations from "./pages/myInvitations/MyInvitations";
import RecentPublications from "./pages/recentPublications/Projects";
import RecentPublicationsProject from "./pages/recentPublications/Project";
import RecentPublicationsPaper from "./pages/recentPublications/Paper";

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
          element={<RecentPublicationsProject />}
        ></Route>
        <Route
          path="/recentPublications/papers/:id"
          element={<RecentPublicationsPaper />}
        ></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:id" element={<Papers />}></Route>
        <Route path="/invitations" element={<MyInvitations />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
