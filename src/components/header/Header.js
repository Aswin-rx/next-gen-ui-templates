import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header" id="header">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <div className="logo">
            <a href="index.html">
              <img src={logo} alt="Bible Logo" />
            </a>
          </div>
          <ul className="links">
            <li><a href="#first">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="video.html">Videos</a></li>
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon">
          <i className="fas fa-search"></i>
        </label>
        <form action="#" className="search-box">
          <input type="text" placeholder="Search" required />
          <button type="submit" className="go-icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Header;
