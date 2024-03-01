import React from "react";
import Navbar from "./component/navbar/index.js";
import './app.css'
import Learning from "./component/learning/index.js";
import Courses from "./component/courses"
import Paragraph from "./component/paragraph/index.js";
import BuyCourse from "./component/buyCourse/index.js"
import Footer from "./component/footer/index.js";
function App() {
  return (
  
    <div className="App">
  <div className="proj">
  <Navbar/>
  <Learning/>
  <Courses/>
  <Paragraph/>
  <BuyCourse/>
  <Footer/>
  </div>
   

    </div>
  );
}

export default App;
