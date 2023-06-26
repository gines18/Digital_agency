import React from "react";
import "./Navbar.css";

import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <div className="container-navbar">
      <div>
        <img id="logo" src="./cuppajoy2.png" alt="logo" />
      </div>

      <div className="navbar-list">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
