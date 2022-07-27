import React from "react";
import "./Main.css";
import img1 from "../images/pieces.jpg";

const Main = () => {
  return (
    <section className="main">
      <img className="images" src={img1} alt="cakes" />
    </section>
  );
};

export default Main;
