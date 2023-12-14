import React from "react";
import "./CSS/Style.css"
import LOGO from "./Photo/LOGO.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function MyStore() {
  return (
    <BrowserRouter>
      <header>
        <div className="Logo"><img src={LOGO} alt="LOGO" width={200} height={70}/></div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Product">Product</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Contact-us">Contact us</Link>
            </li>
            <li>
              <Link to="cart"><i class="bi bi-bag-fill"></i></Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="Search">
      <input type="text" style={{backgroundImage:}} name="search" placeholder="Search.."/>
      </div>
      <div className="space">
        <Routes>
        <Route path="/" element />
        <Route path="Product" element />
        <Route path="About" element />
        <Route path="Contact-us" element />
        <Route path="cart" element />
      </Routes>
      </div>
      <footer>
            <p>© 2024 All rights reserved</p>
      </footer>
    </BrowserRouter>
  );
}
