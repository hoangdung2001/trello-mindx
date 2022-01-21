import React from "react";
import "./App.scss";
// Custom components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./page/board";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" index />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Board />} path="/board/:boardId" />
      </Routes>
    </Router>
  );
}

export default App;
