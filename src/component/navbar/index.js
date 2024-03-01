import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span>
          <a href="#about">About</a>
        </span>
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
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
    
  );
};

export default Navbar;
