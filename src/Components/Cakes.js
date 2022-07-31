import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cakes.css";
const Cakes = () => {
  const [cakes, setCakes] = useState([]);
  const [cakeId, setCakeId] = useState([]);

  useEffect(() => {
    getAllCakes();
  }, []);
  const getAllCakes = () => {
    axios
      .get("http://localhost:3000/cakes")
      .then((response) => {
        const allCakes = response.data;
        setCakes(allCakes);
        setCakeId(allCakes[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  function deleteCake(id) {
    fetch(`http://localhost:3000/cakes/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        getAllCakes();
      });
    });
  }
  if (cakes.length > 0) {
    return cakes.map((cake) => {
      return (
        <div key={cake.id} className= "image">
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
