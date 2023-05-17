import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className="welcome" id="welcome">
        <h1>
          Immerse yourself in the vibrant and <span id="lime">c</span>
          <span id="white">r</span>
          <span id="green">e</span>
          <span id="yellow">a</span>
          <span id="black">t</span>
          <span id="violet1">i</span>
          <span id="grey">v</span>
          <span id="blue">e</span> {""}
          coffee culture of our cafe, where every cup is a work of art and every
          sip a journey of discovery
        </h1>
      </div>
    </>
  );
}

export default Welcome;
