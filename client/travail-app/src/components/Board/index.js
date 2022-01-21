import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
export default function Board({ _id, title, background }) {
  const history = useNavigate();
  return (
    <div
      className="board-intro"
      onClick={() => history(`/board/${_id}`, { replace: true })}
    >
      <img style={{ backgroundImage: `${background}` }} alt="" />
      <div className="title">{title}</div>
    </div>
  );
}
