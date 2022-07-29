import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <div>
      <div>
        <form>
          <label>
            {" "}
            Cakes Flavor:
            <input type="text" />
          </label>
          <label>
            Image
            <input type="url" />{" "}
          </label>
          <label>
            Number of KGs
            <input type="number" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Order;
