import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from '../../assets/static/images/biblelogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faLongArrowAltRight, faStar } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
         <>
          {/* Header Start */}
          <div className="header" id="header">
            <nav>
              <input type="checkbox" id="show-search" />
              <input type="checkbox" id="show-menu" />
              <label htmlFor="show-menu" className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
              </label>
              <div className="content">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <ul className="links">
                  <li>
                  <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                  <li>
                  <Link to="/videos">videos</Link>
                  </li>
                </ul>
              </div>
              <label htmlFor="show-search" className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </label>
              <form action="#" className="search-box">
                <input type="text" placeholder="Search" required />
                <button type="submit" className="go-icon">
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </button>
              </form>
            </nav>
          </div>
          {/* Header End */}  
          </>
          );
         
}

export default Header;
