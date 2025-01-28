import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";
import "../Home/main.css";
import "../Home/util.css";
import arrow from '../../assets/static/images/up-arrow.png';

const Videos = () => {
  return (
    <div>
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

      <Link to="#" className="arrow">
        <img src={arrow} alt="Up Arrow" width="50px" />
      </Link>
    </div>
  );
};

export default Videos;
