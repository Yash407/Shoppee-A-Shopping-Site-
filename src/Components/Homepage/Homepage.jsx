import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import "./Homepage.css";
import { Link } from "react-scroll";

const Homepage = () => {
  return (
    <div>
      <div className="main">
        <div className="main-conent">
          <div>
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="icon" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="latest-btn">
              <Link
                to="Newcollection"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Latest Collection
              </Link>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="main-image">
          <img className="main-img" src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
