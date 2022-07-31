import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cakes.css";
const Cakes = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    getAllCakes();
  }, []);

  const getAllCakes = () => {
    axios
      .get("https://cakes-api-json-server.herokuapp.com/cakes")
      .then((response) => {
        const allCakes = response.data;
        setCakes(allCakes);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  if (cakes.length > 0) {
    return cakes.map((cake) => {
      return (
        <div key={cake.id} className="image">
          <div className="cakeImg">
            <img src={cake.image} alt={cake.cake} />
            <span>{cake.cake}</span>
            <span>{cake.descriptio}</span>
          </div>
          <div></div>
        </div>
      );
    });
  } else {
    return null;
  }
};

export default Cakes;
