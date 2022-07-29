import React, { useState } from "react";
import "./Order.css";

const Order = () => {
  const [cakes, setCakes] = useState([]);
  const [cakeName, setCakeName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [numberOfKgs, setNumberOfKgs] = useState("");
  const[cakesId, setCakesId] = useState(null)

  useEffect(() => {
    getCakes();
  }, [])
  function updateCakes() {
    let item = { cakeName, imageUrl, numberOfKgs };

    fetch(`http://localhost:3000/cakes${cakesId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        getUsers();
      });
    });
  }

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
