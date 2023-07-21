import React, { useEffect, useState } from 'react';
import { motion} from 'framer-motion';
import './Scroll.css'

const ScrollOpacityHeader = () => {
    const [opacity, setOpacity] = useState(1);
  
    // Add your scroll event listener here
    useEffect(() => {
      // Your scroll event listener code here
      // We'll set up the event listener to update the opacity based on the scroll position
      // The opacity will decrease as the user scrolls down the page
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = 650; // Adjust this value as needed for your desired effect
  
        // Calculate the new opacity value based on the scroll position
        const newOpacity = 1 - Math.min(scrollY / maxScroll, 1);
        setOpacity(newOpacity);
      };
  
      // Attach the scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Don't forget to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <>  
     
      <div id='fadeout-container'>
        <motion.h1 id='fadeout' style={{ opacity }}>Life is all about coffee</motion.h1>
      </div>
      
      </>
    );
  };
  
  export default ScrollOpacityHeader;
  