import React, { useState, useEffect } from "react";
import axios from "axios";
import Cakes from "./Cakes";


function GetCakes() {
  const [cake, setCake] = useState("");

  useEffect(() => {
    getCake();
  }, []);

  const getCake = () => {
    axios
      .get("http://localhost:3000/cakes")
      .then((response) => {
        const allCakes = response.data;
        setBolt(allCakes);
      })
      .catch((err) => {
        return err.response;
      });
  };
  return <Cakes cake={cake} />;
}
export default GetCakes;