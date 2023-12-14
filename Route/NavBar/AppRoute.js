import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
export default function AppRoute() {
  return (
    <BrowserRouter>
      <nav>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link class="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-dark" to="/blogs">
              Blogs
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-dark" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
