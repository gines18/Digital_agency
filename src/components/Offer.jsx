import React from "react";
import './Offer.css'


  const imageData = [
    {
      id: 1,
      image: 'coffee2.jpeg', 
      text: 'Coffee is more than just a beverage, it is a culture - a way of life that brings people together and fuels creativity and inspiration.'
    },
    {
      id: 2,
      image: 'coffee1.jpeg', 
      text: 'Coffee is a universal language that transcends borders and brings people from all walks of life together, united by the simple pleasure of a great cup of coffee.'
    },
    {
      id: 3,
      image: 'coffee3.jpeg', 
      text: 'There is nothing quite like the aroma of freshly brewed coffee - the rich, earthy scent that awakens your senses and invites you to savor every sip.'
    }
    

  ];

  function MyComponent() {
    return (
      <div className="digital-container">
        {imageData.map(item => (
          <div key={item.id}>
            <img className="offer-img" src={item.image} alt="coffee" />
            <p>{item.text}</p>
           
          </div>
        ))}
      </div>
    );
  
}

export default MyComponent;
