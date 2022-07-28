import React from "react";

function Cakes({ cakes }) {

  if (!cakes) return null;
  
  return cakes.map((cake, index) => {
    return (
      <div key={index}>
        <div>
          <div>
            <img className="images" src={cake.image} alt={cake.name} />
            <p> {cake.cake}</p>
            <p>{cake.description}</p>
          </div>
        </div>
      </div>
    );
  });
}

export default Cakes;
