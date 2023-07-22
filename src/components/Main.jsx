import React from 'react'
import coffeeWoman from './assets/woman.jpg'
import Footer from './Footer'
import './Main.css'

function Main() {
  return (
      <>
      <div className='headline'>CuppaJoy - Speciality Coffee Roasters</div>
      <div className="container-main-pic">
      <img id="woman" src={coffeeWoman} alt="" />
      </div>
      <Footer />
      </>
  )
}

export default Main