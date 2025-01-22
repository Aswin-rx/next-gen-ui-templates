import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import "./Video.css";
import "../Home/main.css";
import "../Home/util.css";

const Videos = () => {
  return (
    <div>
      <header id="header">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <FaBars />
          </label>
          <div className="content">
            <div className="logo">
              <Link to="/">
                <img src="images/biblelogo.jpg" alt="Logo" />
              </Link>
            </div>

            <ul className="links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
            </ul>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <FaSearch />
          </label>
          <form action="#" className="search-box">
            <input type="text" placeholder="Search" required />
            <button type="submit" className="go-icon">
              <FaSearch />
            </button>
          </form>
        </nav>
      </header>

      <div className="video-container">
        <iframe
          src="https://www.youtube-nocookie.com/embed/_5STugdrFuY?si=MDMjql8ybx0IWRdW&start=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-container1">
        <iframe
          src="https://www.youtube-nocookie.com/embed/CClPiKBzqJg?si=VozMBoOgdTWR3Cmw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <footer id="footer">
        <div className="footer-content">
          <div className="logo">
            <img src="images/biblelogo.jpg" alt="Logo" />
          </div>

          <p>
            "Explore the Bible like never before with our engaging quizzes and deepen your understanding of scripture
            today!"
          </p>

          <div className="social-links">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaPinterestP />
          </div>
        </div>
        <hr />
      </footer>

      <Link to="#" className="arrow">
        <img src="./images/up-arrow.png" alt="Up Arrow" width="50px" />
      </Link>
    </div>
  );
};

export default Videos;
