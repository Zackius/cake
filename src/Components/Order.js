import React from "react";
import "./Order.css";

const Order = () => {

  function handleCakeFlavor(e){
    setUserFirstName(e.target.value)
   }
  
   function handleImageUrl(e){
    setUserLastName(e.target.value)
   }
  
   function handleNumber(e){
    setUserBio(e.target.value)
   }
   
   function handleSubmit(e){
    e.preventDefault()
     const cakeData = {
       first userFirstName,
       lastName: userLastName,
       About: userBio
     }

  return (
    <div className="main">
      <div className="inputOrder">
        <form className="list"  onClick={handleSubmit}>
          <label>
            <h4>Cakes Flavor</h4>
            <input className="gap" type="text"  onChange={handleCakeFlavor}/>
          </label>
          <label>
            <h4> Image-Url</h4>
            <input className="gap" type="url"  onChange={handleImageUrl}/>
          </label>
          <label>
            <h4> Number of KGs</h4>
            <input className="gap" type="number" onChange={handleNumber } />
          </label>
          <div className="btn">
           <input type='submit'/>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Order;
