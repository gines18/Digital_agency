import React, { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    let feedback = document.getElementById("hide-feedback");
    feedback.style.display = "none";
  };

  return (
    <div className="container-feedback">
      <div id="hide-feedback">
        <h2>THANKS FOR COMING</h2>
        <p>We'd love to hear your thoughts about the website</p>
        <button className="button-feedback" onClick={handleClick}>
          Leave feedback
        </button>
      </div>
      <div
        className={showAlert ? "alert show" : "alert"}
        role="alert"
      >
        <span id="survey">Survey coming soon!</span>
      </div>
    </div>
  );
}

export default Feedback;
