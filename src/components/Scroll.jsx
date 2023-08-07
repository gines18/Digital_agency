import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Scroll.css";

const ScrollOpacityHeader = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 650;

      const newOpacity = 1 - Math.min(scrollY / maxScroll, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="fadeout-container">
        <motion.h1
          id="fadeout"
          style={{ opacity, position: "sticky", top: "100px" }}
        >
          Life is all about coffee
        </motion.h1>
      </div>
    </>
  );
};

export default ScrollOpacityHeader;
