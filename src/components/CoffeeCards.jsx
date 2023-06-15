import React from 'react'
import './CoffeeCards.css'

function Coffee_cards(props) {
  return (
    <>
   
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row">
    <div className="col col-img">
      <img src={`${props.img}`} className="img-city" alt="city"></img>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title">{props.place}</h5>
        <p className="card-text">{props.coffee}</p>
        <p className="card-text"><small className="text-body-secondary">{props.cost}</small></p>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Coffee_cards
