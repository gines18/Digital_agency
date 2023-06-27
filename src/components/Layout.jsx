import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import './Layout.css'
import building from './assets/building.jpg'
import Footer from "./Footer.jsx";
function Layout() {
  return (
    <>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>

<div className="main-site-box">
  <h1>Building ...</h1>
  </div>



    </>
  );
}

export default Layout;
