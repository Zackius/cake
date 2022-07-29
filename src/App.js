import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Cakes from "./Components/Cakes";

import Order from "./Components/Order";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="cakes" element={<Cakes />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
