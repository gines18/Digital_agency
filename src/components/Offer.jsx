import React from "react";
import './Offer.css'


  const imageData = [
    {
      id: 1,
      image: 'logo.png', 
      text: 'A digital agency specializes in providing digital services to businesses and organizations.'
    },
    {
      id: 2,
      image: 'logo2.png', 
      text: 'Digital agencies help clients improve their online presence and reach their target audience through various digital channels.'
    },
    {
      id: 3,
      image: 'logo3.png', 
      text: 'Digital agencies often offer a range of services, such as website design, social media marketing, and search engine optimization.'
    }
    

  ];

  function MyComponent() {
    return (
      <div className="digital-container">
        {imageData.map(item => (
          <div key={item.id}>
            <img class="offer-img" src={item.image} />
            <p>{item.text}</p>
           
          </div>
        ))}
      </div>
    );
  
}

export default MyComponent;
