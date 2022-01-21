import axios from "axios";
import React from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target["email"].value;
    const password = e.target["password"].value;
    const register = await axios.post("http://localhost:9000/api/auth/signup", {
      username,
      password,
    });
    if (register.data) {
      navigate("/", { replace: true });
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
          <h4 style={{ color: "#5E6C84" }}>Đăng kí tài khoản</h4>
          <form onSubmit={(e) => handleRegister(e)}>
            <input className="email input" placeholder="Họ và tên"></input>
            <input className="email input" placeholder="SĐT"></input>
            <input
              className="email input"
              placeholder="Nhập email"
              name="email"
            ></input>
            <input
              className="email input"
              placeholder="Nhập mật khẩu"
              type={"password"}
              name="password"
            ></input>
            <input
              className="input"
              type={"password"}
              placeholder="Nhập lại mật khẩu"
            ></input>
            <button className="submit">Đăng kí</button>
          </form>
          <p id="have-account">Nếu đã có tài khoản,</p>
          <a id="register" href="./login">
            Đăng nhập ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
