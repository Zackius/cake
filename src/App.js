import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="navbar" element={<Navbar />} />
      </Routes>
      <Main />
      
    </div>
  );
}

export default App;
