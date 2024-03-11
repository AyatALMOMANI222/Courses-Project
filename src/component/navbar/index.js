// Navbar.js
import {React , useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();
const aboutRef = useRef()

const move =()=>{
  aboutRef.current.scrollIntoView(({
    behavior:"smooth", block :"center"
  }))
}


  const handleClick = () => {
    navigate("/login");
  };

  const handleSignClick = () => {
    navigate("/register");
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <span onClick={handleAboutClick}>About</span>
        <span>
          <a href="#courses">Courses</a>
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
        <button onClick={handleClick}>Sign in</button>
        <button onClick={handleSignClick}>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
