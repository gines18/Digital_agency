import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import './Layout.css'
import Main from './Main.jsx'

function Layout() {
  return (
    <>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/main" element={<Main />} />
    </Routes>
    </>
  );
}

export default Layout;
