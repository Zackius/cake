import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navlogo">
        <div>Balmy Bakes</div>
      </Link>
      <nav className="navbar-container">
        <Link to="/" className="nav-link">
          Cakes
        </Link>
        <Link to="/" className="nav-link">
          Wedding Cakes
        </Link>
        <Link to="/" className="nav-link">
          Birthday Cakes
        </Link>
        <Link to="/" className="nav-link">
          PrIce
        </Link>
        <Link to="/" className="nav-link">
          Order
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
