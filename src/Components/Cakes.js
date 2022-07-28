import React from "react";

function Cakes({ cakes }) {
  console.log(cakes);
  if (cakes.length > 0) {
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
  return (
    <div className="ui four column grid">
      <div className="row">
        <div></div>
      </div>
    </div>
  );
}

export default Cakes;
