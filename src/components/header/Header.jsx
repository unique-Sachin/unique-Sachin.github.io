import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ME.png";
import Socials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div id="header" className="container header__container">
        <div className="header_container_left">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about-imag" />
            </div>
          </div>
        </div>
        <div className="header_container_right">
          <h1 className="greeting_hello">HELLO, I AM</h1>
          <h1 className="greeting_name">SACHIN MISHRA.</h1>
          <p>
            Aspiring and self-motivated with a passion for developing scalable
            web applications and working across the full stack. Looking forward
            to joining an organization to grow my skills while contributing to a
            positive outcome.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
