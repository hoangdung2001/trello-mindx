import React from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target["email"].value;
    const password = e.target["password"].value;
    const token = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/auth/login/${username}`
    );
    console.log(token);
    if (token) {
      const login = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/auth/login`,
        {
          username,
          password,
        },
        {
          headers: {
            authorization: `Bears ${token.data.accessToken}`,
          },
        }
      );
      if (login) {
        navigate(`/home`, { replace: true });
      }
    }
  };
  return (
    <div className="body">
      <img
        className="logo-trello"
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
      ></img>
      <div id="form-login">
        <div id="login">
          <h4 style={{ color: "#5E6C84" }}>Đăng nhập</h4>
          <form onSubmit={(e) => handleLogin(e)}>
            <input
              className="email input"
              placeholder="Nhập email"
              name="email"
            ></input>
            <input
              className="password input"
              placeholder="Nhập mật khẩu"
              name="password"
            ></input>
            <button className="submit">Đăng nhập</button>
          </form>
          <p>Hoặc</p>
          <div>
            <a className="login-by" href="">
              <span id="login-google"></span>
              <span>Tiếp tục với Google</span>
            </a>
            <a className="login-by" href="">
              <span id="login-microsoft"></span>
              <span>Tiếp tục với Microsoft</span>
            </a>
            <a className="login-by" href="">
              <span id="login-apple"></span>
              <span>Tiếp tục với Apple</span>
            </a>
          </div>
          <a id="register" href="./register">
            Đăng kí tài khoản
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
