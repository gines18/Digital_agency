import React, {useState} from 'react'
import './Feedback.css'



function Feedback() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <div className='container-feedback'>

<div className="svg-overlay2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8aa4b" fillOpacity="1" d="M0,128L0,192L57.6,192L57.6,256L115.2,256L115.2,96L172.8,96L172.8,96L230.4,96L230.4,128L288,128L288,160L345.6,160L345.6,192L403.2,192L403.2,0L460.8,0L460.8,160L518.4,160L518.4,160L576,160L576,256L633.6,256L633.6,192L691.2,192L691.2,128L748.8,128L748.8,160L806.4,160L806.4,224L864,224L864,64L921.6,64L921.6,256L979.2,256L979.2,256L1036.8,256L1036.8,192L1094.4,192L1094.4,256L1152,256L1152,64L1209.6,64L1209.6,128L1267.2,128L1267.2,0L1324.8,0L1324.8,160L1382.4,160L1382.4,64L1440,64L1440,0L1382.4,0L1382.4,0L1324.8,0L1324.8,0L1267.2,0L1267.2,0L1209.6,0L1209.6,0L1152,0L1152,0L1094.4,0L1094.4,0L1036.8,0L1036.8,0L979.2,0L979.2,0L921.6,0L921.6,0L864,0L864,0L806.4,0L806.4,0L748.8,0L748.8,0L691.2,0L691.2,0L633.6,0L633.6,0L576,0L576,0L518.4,0L518.4,0L460.8,0L460.8,0L403.2,0L403.2,0L345.6,0L345.6,0L288,0L288,0L230.4,0L230.4,0L172.8,0L172.8,0L115.2,0L115.2,0L57.6,0L57.6,0L0,0L0,0Z"></path></svg>
              </div>

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