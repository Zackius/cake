import React from "react";
import axios from "axios";

const Cakes = (cakes) => {
  
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
