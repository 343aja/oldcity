import React from "react";
 import "../css/nav.css";

const  Navbar =() => {
  return (
    <nav className="navbar">
        <div className="container">
          <h1 className="logo">OldCity</h1>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#about">Services</a>
            </li>
            <li>
              <a href="#services">Portfolo</a>
            </li>
            <li>
              <a href="#contact">Article</a>
            </li>
          </ul>
          <div className="nav-button">
            <button className="contact-button">Contact</button>
          </div>
        </div>
      </nav>
  );
}

export default Navbar