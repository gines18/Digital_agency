import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Welcome from "./components/Welcome.jsx";
import MyComponent from "./components/Offer";
import Footer from "./components/Footer.jsx";
import Coffee from "./components/RecipeAPI.jsx";
import CoffeeRestaurant from "./components/CoffeeRestaurant.jsx";

import Article from "./components/Article.jsx";

import ContactCard from "./components/ContactForm.jsx";

import Feedback from "./components/Feedback.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <MyComponent />
      <Carousel />
      <Article />
      <CoffeeRestaurant />
      <Coffee />
      <Feedback />
      <ContactCard />
      <Footer />
    </>
  );
}

export default App;
