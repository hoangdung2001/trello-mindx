import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function BoardItem({ setCreate, create }) {
  const history = useNavigate();
  const [bg, setBG] = useState(null);
  return (
    <div className="pop-up">
      <h4>Create board</h4>
      <img
        src="https://a.trellocdn.com/prgb/dist/images/board-preview-skeleton.14cda5dc635d1f13bc48.svg"
        alt=""
      />
      <h4>Background</h4>
      <ul className="background-list">
        <li className="background-item">
          <button
            className="background-link"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1642249268006-9e05029c9262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjQyNTM3NDU2&ixlib=rb-1.2.1&q=80&w=400)",
            }}
            onClick={(e) => {
              setBG(e.target.style.backgroundImage);
            }}
          ></button>
        </li>
        <li className="background-item">
          <button
            className="background-link"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1642201344145-0d49517e76e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjQyNjAyMjYw&ixlib=rb-1.2.1&q=80&w=400)",
            }}
            onClick={(e) => setBG(e.target.style.backgroundImage)}
          ></button>
        </li>
        <li className="background-item">
          <button
            className="background-link"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1642359445620-6374fe6a3407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjQyNjAyMjYw&ixlib=rb-1.2.1&q=80&w=400)",
            }}
            onClick={(e) => setBG(e.target.style.backgroundImage)}
          ></button>
        </li>
        <li className="background-item">
          <button
            className="background-link"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1642358666536-6bcc92facfe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjQyNjAyMjYw&ixlib=rb-1.2.1&q=80&w=400)",
            }}
            onClick={(e) => setBG(e.target.style.backgroundImage)}
          ></button>
        </li>
      </ul>
      <form
        onSubmit={async (e) => {
          const createBoard = await axios.post(
            "http://localhost:9000/api/board",
            {
              title: e.target["title"].value,
              background: bg,
            }
          );
          if (createBoard.data._id) {
            history(`/board/${createBoard.data._id}`, { replace: true });
          }
        }}
      >
        <h4>Board Title *</h4>
        <input type="text" name="title" />
        <button type="submit">Create</button>
      </form>
      <div className="close-icon" onClick={() => setCreate(!create)}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
}
