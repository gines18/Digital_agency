import React from 'react'
import coffeeWoman from './assets/woman.jpg'
import './Main.css'
import Footer from './Footer'

function Main() {
  return (
      <>
      <div className='br'>CuppaJoy - Speciality Coffee Roasters</div>
      <div className="container-main-pic">
      <img id="woman" src={coffeeWoman} alt="" />
      </div>
      <Footer />
      </>
  )
}

export default Main