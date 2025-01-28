import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faYoutube, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import logo from '../../assets/static/images/biblelogo.jpg';
import "./Footer.css";
const Footer = () => {
  return (
    <>
     {/* Footer Start */}
          <footer id="footer">
            <div className="footer-content">
              <div className="logo">
                <img src={logo} alt="Footer Logo" />
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
          </>
  
  );
};

export default Footer;