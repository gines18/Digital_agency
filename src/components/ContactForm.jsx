import React from 'react'
import './ContactForm.css'

const ContactDetails = [
    {
        id: 1,
        logo:"location.png",
        text:"LOCATION",
        text2: "United Kingdom, Worksop",
    },
    {
        id: 2,
        logo: "telephone.png",
        text: "PHONE NUMBER",
        text2: "+44 7538570387",
    },
    {
        id: 3,
        logo:"email.png",
        text: "EMAIL",
        text2: "ruczkowski.m@gmail.com",
    },
];



function ContactCard() {
  return (
<>
<div className='container-contact-title'>
<h2 id="contact-title">Get in Touch for the Perfect Brew!</h2>
</div>
  

<div className="container-contact" id="contact">
{ContactDetails.map(item => (
    <div key={item.id} className="card card2" style={{width: "18rem"}}>
<img src={item.logo} className='card-img-top'  style={{width: "5rem"}} alt="icon"></img>
<div className="card-body">
    <p className="card-text">{item.text}</p>
    <p className="card-text">{item.text2}</p>
</div>
    </div>
    
))}
</div>
</>
  );
}

export default ContactCard


  
