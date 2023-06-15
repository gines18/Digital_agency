import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Welcome from "./components/Welcome.jsx";
import MyComponent from "./components/Offer";
import Footer from "./components/Footer.jsx";
import Coffee from "./components/RecipeAPI.jsx";
import Article from "./components/Article.jsx";
import ContactCard from "./components/ContactForm.jsx";
import Feedback from "./components/Feedback.jsx";
import CoffeeCards from "./components/CoffeeCards";
import data from "./Data.jsx"


function App() {

const cards = data.map((item, index) => {
  return( 
    
    <CoffeeCards 
            key={item.id}
            img={item.img}
            place={item.place}
            coffee={item.coffee}
            cost={item.cost}
/>

  )

  })
 
  return (
    <>
      <Navbar />
      <Welcome />
      <MyComponent />
      <Carousel />
      <Article />
      <Coffee />
      <div className="coffeeCardsContainer">{cards}</div>
     
      <Feedback />
      <ContactCard />
      <Footer />
    </>
  );
}

export default App;
