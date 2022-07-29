import React, { useState, useEffect } from "react";
import axios from "axios";

const Cakes = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    getAllCakes();
  }, []);
  const getAllCakes = () => {
    axios
      .get("http://localhost:3000/cakes")
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
          <div className="images" key={cake.id}>
            <img src={cake.image} alt={cake.name} />
                 <p>{cake.name }</p>
        </div>
      )
        })
  } else {
    return null
    }
  }


export default Cakes;
