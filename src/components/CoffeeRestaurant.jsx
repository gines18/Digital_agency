import React from 'react'
import './CoffeeRestaurant.css'

function CoffeeRestaurant() {
  return (
    <>
    <div className='container-coffee'>

      <div>
        <img id='coffee-img' src='./coffee-restaurant.jpeg' alt="coffee"/>
        </div>

        <div id='coffee-list'>
          <h1>11 Tips for Brewing Better Coffee at Home</h1>
          <p>Use Fresh, Whole Bean Coffee</p>
          <p>Use A Scale</p>
          <p>Use The Right Amount of Coffee</p>
          <p>Use A Burr Grinder</p>
          <p>Grind At The Correct Coarseness (Or Fineness) Setting</p>
          <p>Use Filtered Water</p>
          <p>Make Sure Your Water is the Right Temperature</p>
          <p>Pre-Heat / Pre-Wet Everything</p>
          <p>Bloom Your Coffee</p>
          <p>Fully Saturate Your Coffee</p>
          <p className='underline'>Experiment!</p>
       </div>

      </div>
      </>
  )
}

export default CoffeeRestaurant