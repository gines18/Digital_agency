import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";

function Layout() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default Layout;
