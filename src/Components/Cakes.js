import React, { useState, useEffect } from "react";
import axios from "axios";

const Birthday = () => {
  const [cakes, setCakes] = useState("");

  useEffect(() => {
    getCakes();
  }, []);

  function getCakes() {
    axios
      .get("http://localhost:3000/cakes")
      .then((resp) => {
        const allCakes = resp.data;
        setCakes(allCakes);
        console.log();
      })
      .catch((error) => console.error(`Error $(error)`));
  }
  console.log(cakes);
  return { cakes };
};

export default Birthday;
