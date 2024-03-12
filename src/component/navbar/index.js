import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { userContext } from "../../App";

const Navbar = () => {
  const navigate = useNavigate();
  const { aboutRef, courseRef } = useContext(userContext);

  const handleClick = () => {
    navigate("/login");
  };

  const handleSignClick = () => {
    navigate("/register");
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const handleCourseClick = () => {
    courseRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <span onClick={handleAboutClick}>About</span>
        <span>
          <a href="#courses" onClick={handleCourseClick}>
            Courses
          </a>
        </span>
        <span>
          <a href="#pricing">Pricing</a>
        </span>
      </div>
      <div>
        <div className="name">
          <span className="span">Quora.</span>
        </div>
      </div>
      <div className="btn">
        <button className="b1" onClick={handleClick}>Sign in</button>
        <button onClick={handleSignClick}>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
