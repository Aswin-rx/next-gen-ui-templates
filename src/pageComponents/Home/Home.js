import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './util.css';
import './Home.css'; // Import the CSS file for styles
import logo from '../../assets/static/images/biblelogo.jpg';
import bibleabt from '../../assets/static/images/bibleabt.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faLongArrowAltRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div>
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
                <a href="#" id="first">Home</a>
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

      {/* Home Section Start */}
      <div className="home">
        <div className="main-text">
          <h1>Jesus Christ With Us</h1>
          <p>Our mission is to spread the word of God and inspire people to deepen their faith</p>
          <button id="btn">Join us</button>
        </div>
      </div>
      {/* Home Section End */}

      {/* About Section Start */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={bibleabt} alt="About Us" />
        </div>
        <div className="about-text">
          <h3>About us</h3>
          <p>
            With all the challenges our world faces today, communities of people of faith are growing to spread
            the message of God's love and hope.
          </p>
          <button id="about-btn">Read More...</button>
        </div>
      </section>
      {/* About Section End */}

      {/* Banner Start */}
      <div className="banner">
        <div className="banner-content">
          <h3>Deepening your faith is possible. We've helped many people do it before.</h3>
        </div>
      </div>
      {/* Banner End */}

      {/* Contact Section Start */}
      <section className="contact" id="contact">
        <div className="content-text">
          <h2>Contact us</h2>
          <p>Help us spread the word of God and inspire future generations.</p>
          <p>Join us and deepen your understanding of the Bible.</p>
          <div className="list">
            <li>
              <a href="#">+9200000000000000</a>
            </li>
            <li>
              <a href="#">example@gmail.com</a>
            </li>
          </div>
        </div>

        <div className="contact-form">
          <form action="#">
            <input type="name" placeholder="Name" required />
            <input type="number" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <textarea cols="35" rows="10" placeholder="Message"></textarea>
            <input type="submit" value="Send" className="submit" required />
          </form>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Review Section Start */}
      <section className="review" id="review">
        <div className="main-txt">
          <h2>Customers <span>Review</span></h2>
        </div>

        <div className="review-content">
          {/* Customer Box */}
          <div className="box">
            <div className="img">
              <img src="./images/pic-1.png" alt="Mark" />
            </div>
            <h3>Mark</h3>
            <div className="star">
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
            </div>
            <p>
              "Incredibly engaging and educational! My family and I love using this site for our weekly Bible
              study sessions. The quizzes are challenging yet fun, and we always learn something new!"
            </p>
          </div>

          <div className="box">
            <div className="img">
              <img src="./images/pic-2.png" alt="Sarah" />
            </div>
            <h3>Sarah</h3>
            <div className="star">
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
            </div>
            <p>
              "Highly recommend this site for anyone wanting to deepen their understanding of the Bible in an
              interactive way. The quizzes are well-crafted, and the explanations are clear and insightful"
            </p>
          </div>

          <div className="box">
            <div className="img">
              <img src="./images/pic-3.png" alt="John" />
            </div>
            <h3>John</h3>
            <div className="star">
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
            </div>
            <p>
              "As someone new to studying the Bible, I was intimidated at first, but this site has made it so
              accessible and enjoyable. The quizzes are user-friendly and the explanations are clear, making
              learning about the Bible a joy!"
            </p>
          </div>
        </div>
      </section>
      {/* Review Section End */}

      {/* Footer Start */}
      <footer id="footer">
        <div className="footer-content">
          <div className="logo">
            <img src="images/biblelogo.jpg" alt="Footer Logo" />
          </div>

          <p>
            "Explore the Bible like never before with our engaging quizzes and deepen your understanding of scripture today!"
          </p>

          <div className="socail-links">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faPinterestP} />
          </div>
        </div>
        <hr />
      </footer>
      {/* Footer End */}

      <a href="#" className="arrow">
        <i>
          <img src="./images/up-arrow.png" alt="Up arrow" width="50px" />
        </i>
      </a>
    </div>
  );
};

export default App;
