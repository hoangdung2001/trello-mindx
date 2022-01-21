import React from "react";
import AppBar from "../components/AppBar/AppBar";
import BoardBar from "../components/BoardBar/BoardBar";
import ListBoard from "../components/ListBoard";
export default function Home() {
  return (
    <div>
      {" "}
      <AppBar />
      <BoardBar />
      <ListBoard />
    </div>
  );
}
