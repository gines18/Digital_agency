import React from "react";
import "./ContactForm.css";
import { motion } from "framer-motion"


const ContactDetails = [
  {
    id: 1,
    logo: "location.png",
    text: "LOCATION",
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
    logo: "email.png",
    text: "EMAIL",
    text2: "ruczkowski.m@gmail.com",
  },
];

function ContactCard() {
  return (
    <>
      <div className="container-contact-title">
        <motion.h2  
         
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.3,
           ease: [0, 0.71, 0.2, 1.01],
           scale: {
             type: "spring",
             damping: 5,
             stiffness: 100,
             restDelta: 0.001
           }
         }} id="contact-title">Get in Touch for the Perfect Brew!</motion.h2>
      </div>

      <div className="container-contact" id="contact">
        {ContactDetails.map((item) => (
          <div key={item.id} className="card card2" style={{ width: "18rem" }}>
            <img
              src={item.logo}
              className="card-img-top"
              style={{ width: "5rem" }}
              alt="icon"
            ></img>
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

export default ContactCard;
