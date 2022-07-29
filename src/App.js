import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Wedding from "./Components/Wedding";
import Birthday from "./Components/Cakes";
import Prices from "./Components/Prices";
import Order from "./Components/Order";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="wedding" element={<Wedding />} />
        <Route path="birthday" element={<Birthday />} />
        <Route path="price" element={<Prices />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
