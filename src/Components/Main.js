import React from "react";
import "./Main.css";
import img1 from "../images/pieces.jpg";

const Main = () => {
  return (
    <section className="main">
      <div >
        <img className="images" src={img1} alt="cakes" />
      </div>
      <div className="main-div">
        <h2>Balmy Bakes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cumque
          neque quis soluta? Magni nisi earum eum impedit nobis, aliquid
          perspiciatis nulla magnam consequatur similique, harum sed itaque
          voluptas libero. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minus, fugiat exercitationem dolor adipisci eos eum voluptate
          numquam nesciunt, natus illo mollitia aute
        </p>
      </div>
    </section>
  );
};

export default Main;
