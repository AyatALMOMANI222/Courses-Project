import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleRegClick=()=>{
    navigate("/register")
  }
  return (
    <div className="login">
      <div className="login-container">
        <div className="log">Login</div>
        <div className="input">
          <input className="username" placeholder="Username" />
          <input className="pass" placeholder="Password" />
          </div>
          <button className="button" onClick={() => handleClick()}>Login</button>
          <div className="reg">Don't have an account?<span className="register" onClick={()=>handleRegClick()}>Register</span></div>
      
      </div>
    </div>
  );
};

export default Login;
