import React from 'react'
import './Carousel.css'

function Carousel() {
  return (
    <>
    <div class="carousel">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./1.jpg" class="d-block w-100" alt="..."></img>
      </div>
      <div class="carousel-item">
        <img src="2.jpg" class="d-block w-100" alt="..."></img>
      </div>
      <div class="carousel-item">
        <img src="3.jpg" class="d-block w-100" alt="..."></img>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  </>
  )
}

export default Carousel