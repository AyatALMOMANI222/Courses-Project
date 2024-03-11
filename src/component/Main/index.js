import React, { useEffect } from "react";
import Navbar from "../navbar/index.js";

import Learning from "../learning/index.js";
import Courses from "../courses/index.js";
import Paragraph from "../paragraph/index.js";
import BuyCourse from "../buyCourse/index.js";
import Footer from "../footer/index.js";
import './style.css'
function Main() {

  const aboutRef = React.useRef(); 
  const scroll =()=>{
    const scrollHeight = aboutRef.current.getBoundingClientRect();
    const container = document.getElementById("app-container");
    console.log(scrollHeight);
    if (container) {
      container.scrollTo({
        top: scrollHeight.y,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="main-container" >
      <div className="proj" >
        <button onClick={()=>scroll()}>hiiiiiiiiii</button>
        <Navbar />
        <Learning />
        <Courses />
        <Paragraph />
        <BuyCourse />
        <div ref={aboutRef}>
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Main;
