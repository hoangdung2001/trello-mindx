import React from "react";
import AppBar from "../components/AppBar/AppBar";
import BoardBar from "../components/BoardBar/BoardBar";
import BoardContent from "../components/BoardContent/BoardContent";
const Board = () => {
  return (
    <div className="travail-app">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
};

export default Board;
