import React from "react";
import "./app.css";
import Main from "./component/Main";
import Login from "./component/login/index.js";
// import Footer from "./component/footer/index.js";
import Register from "./component/register/index.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container" id="app-container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<Footer />} /> */}

      </Routes>

   
    </div>
  );
}

export default App;
