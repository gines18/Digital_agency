import React from "react";
import "./Navbar.css";


import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <>
    <div className="container-navbar">
      <div>
        <img id="logo" src="./cuppajoy2.png" alt="logo" />
      </div>

      <div className="navbar-list">
        <li>
          <Link to="/about">Get inspiration</Link>
        </li>
        <li>
          <Link to="/home">Read about coffee</Link>
        </li>
        <li>
          <Link to="/products">Feedback/Contact</Link>
        </li>
        <li>
          <Link to="/">Main site</Link>
        </li>
      </div>
    </div>
    <div>
       
    </div>
    </>
   
  );
}

export default Navbar;
