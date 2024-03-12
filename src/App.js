import React, { useRef, createContext } from "react";

import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Main from "./component/Main";
import Login from "./component/login";
import Register from "./component/register"
 export const userContext = createContext();

 function App() {
  const aboutRef = useRef(null);
  const courseRef = useRef(null);

  return (
    <userContext.Provider value={{ aboutRef,courseRef }}>
    
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    
    </userContext.Provider>
  );
}

export default App;


