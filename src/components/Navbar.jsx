import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className="container">
    <div>
     <img src="./download.png" alt="logo" />
     </div>

     <div className='navbar-list'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
     </div>
     </div>
     
     </>
  )
}

export default Navbar;