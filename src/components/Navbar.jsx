import React from "react";
import "./Navbar.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <>
      <BrowserRouter>
        <div className="container-navbar">
          <div>
            <img id="logo" src="./download.png" alt="logo"></img>
          </div>

          <div className="navbar-list">
            <ul>
              <li>
              <Link to="#welcome">
                <img src="./home.png" alt="home"></img>
                </Link>
              </li>
              <li>
              <Link to="#inspiration">
                <img src="./information.png" alt="information"></img>
                </Link>
              </li>
              <li>
                <Link to="#contact">
                  <img src="./mail.png" alt="mail"></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
