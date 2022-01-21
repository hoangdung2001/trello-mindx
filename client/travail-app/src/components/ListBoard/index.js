import React, { useEffect, useState } from "react";
import "./index.scss";
import BoardItem from "../BoardItem";
import axios from "axios";
import Board from "../Board";
export default function ListBoard() {
  const [create, setCreate] = useState(false);
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    const getBoard = async () => {
      const boards = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/board`
      );
      setBoards(boards.data);
    };
    getBoard();
  }, []);
  return (
    <div className="body_trail">
      {boards.map((item, index) => {
        return <Board {...item} key={index} />;
      })}
      <button onClick={() => setCreate(!create)}>Create</button>
      {create && <BoardItem setCreate={setCreate} create={create} />}
    </div>
  );
}
