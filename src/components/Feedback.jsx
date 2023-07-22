import React, {useState} from 'react'
import './Feedback.css'



function Feedback() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <div className='container-feedback'>

      <h2>THANKS FOR COMING</h2>
      <p>We'd love to hear your thoughts about the website</p>
      <button className='button-feedback' onClick={handleClick}>Leave feedback</button>
      <div className={showAlert ? 'alert show' : 'alert'} role="alert">
        Survey coming soon!
      </div>
    </div>
  );
}

export default Feedback;