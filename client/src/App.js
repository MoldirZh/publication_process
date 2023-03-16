import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Projects from "./pages/projects/Projects";
import Upload from "./pages/upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
