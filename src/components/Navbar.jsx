import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container">
        <div>
          <img id="logo" src="./download.png" alt="logo" />
        </div>

        <div className="navbar-list">
          <ul>
            <li>
              <img src="./home.png" alt="home"></img>
            </li>
            <li>
              <img src="./information.png" alt="information"></img>
            </li>
            <li>
              <img src="./mail.png" alt="mail"></img>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
