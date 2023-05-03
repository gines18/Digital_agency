import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Welcome from'./components/Welcome.jsx'
import MyComponent from './components/Offer'
import Footer from './components/Footer.jsx'

function App() {
  return (<>
<Navbar />
<Welcome />
<MyComponent/>
<Carousel />
<Footer/>
</>
  )

}

export default App