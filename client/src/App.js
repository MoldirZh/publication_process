import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import './Styles/App.css';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>
        Footer
      </footer>
    </Router>
  );
}

export default App;
