import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <div className="main">
      <div className="inputOrder">
        <form className="list">
          <label>
            <h4>Cakes Flavor</h4>
            <input className="gap" type="text" />
          </label>
          <label>
            <h4> Image-Url</h4>
            <input className="gap" type="url" />{" "}
          </label>
          <label>
            <h4> Number of KGs</h4>
            <input className="gap" type="number" />
          </label>
          <div className="btn">
          <button>Submit</button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Order;
