import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Welcome from'./components/Welcome.jsx'
import MyComponent from './components/Offer'
import Footer from './components/Footer.jsx'
import Coffee from './components/RecipeAPI.jsx'

function App() {
  return (<>
<Navbar />
<Welcome />
<MyComponent/>
<Carousel />
<Coffee />
<Footer/>
</>
  )

}

export default App