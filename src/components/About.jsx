import React from "react";

import Welcome from "./Welcome.jsx";
import MyComponent from "./Offer";
import Footer from "./Footer.jsx";
import Coffee from "./RecipeAPI.jsx";

import data from "./Data.jsx";

import CoffeeCards from "./CoffeeCards";

function About() {
  const cards = data.map((item, index) => {
    return (
      <CoffeeCards
        key={item.id}
        img={item.img}
        place={item.place}
        coffee={item.coffee}
        cost={item.cost}
      />
    );
  });

  return (
    <>
      <Welcome />
      <MyComponent />

      <Coffee />
      <div className="coffeeCardsContainer">{cards}</div>

      <Footer />
    </>
  );
}

export default About;
