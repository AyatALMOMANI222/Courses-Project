import React, { useEffect } from "react";
import { useContext } from "react";
import { userContext } from "../../App.js";
import Navbar from "../navbar/index.js";
import Learning from "../learning/index.js";
import Courses from "../courses/index.js";
import Paragraph from "../paragraph/index.js";
import BuyCourse from "../buyCourse/index.js";
import Footer from "../footer/index.js";
import './style.css'
function Main() {
 const {aboutRef, courseRef}= useContext(userContext)
  
  return (
    <div  >
      <div className="proj" >
        <Navbar />
        <Learning />
        <Courses courseRef={courseRef}  />
        <Paragraph />
        <BuyCourse />
        <div>
        <Footer aboutRef={aboutRef}/>
        </div>
      </div>
    </div>
  );
}

export default Main;
