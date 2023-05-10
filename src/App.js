import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Welcome from'./components/Welcome.jsx'
import MyComponent from './components/Offer'
import Footer from './components/Footer.jsx'
import Coffee from './components/RecipeAPI.jsx'

import ContactCard from './components/ContactForm.jsx'
import Carol from './components/carol.jsx'
import Feedback from './components/Feedback.jsx'


function App() {
  return (
    <>
<Navbar />
<Welcome />
<MyComponent/>
<Carousel />
<Coffee />
<Feedback />
<ContactCard />
<Carol />
<Footer/>
</>
  )

}

export default App