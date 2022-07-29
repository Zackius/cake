import React,  { useState, useEffect } from 'react'
import Cakes from "./Cakes"
import axios from "axios";

const Service = () => {
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
  return (
    <div>Service</div>
  )
    return <Cakes cakes={cakes}/>
}

export default Service