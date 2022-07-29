import React, { useState } from "react";
import "./Order.css";
import Cakes from "./Cakes";

const Order = ({cakes}) => {
  const [cakes, setCakes] = useState([]);
 

  return (
    <div className="main">
      <div className="inputOrder">
        <form className="list" onClick={handleSubmit}>
          <label>
            <h4>Cakes Flavor</h4>
            <input
              className="gap"
              value={cakeName}
              type="text"
              onChange={(e) => {
                setCakeName(e.target.value);
              }}
            />
          </label>
          <label>
            <h4> Image-Url</h4>
            <input
              className="gap"
              type="url"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </label>
          <label>
            <h4> Number of KGs</h4>
            <input
              className="gap"
              type="number"
              value={numberOfKgs}
              onChange={(e) => {
                setNumberOfKgs(e.target.value);
              }}
            />
          </label>
          <div className="btn">
            <input onClick={updateCakes} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
