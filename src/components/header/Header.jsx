import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ME.png";
import Socials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div id="header" className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sachin Mishra</h1>
        <h5 className="text-light">FullStack Web Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
