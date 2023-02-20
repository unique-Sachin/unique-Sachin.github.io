import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import RESUME from "../../assets/Sachin_Mishra_Resume.pdf";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1uYU19l4k_t7pBG1ad_0w-95FqybOHZI6/view?usp=share_link"
    );
  };
  return (
    <>
      <nav id="nav">
        <Link
          to="header"
          onClick={() => {
            setActiveNav("#");
            document.title = "Sachin ~ Hero";
          }}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome className="menuicons" />
          Home
        </Link>
        <Link
          to="about"
          onClick={() => {
            setActiveNav("#about");
            document.title = "Sachin ~ About";
          }}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser className="menuicons" />
          About
        </Link>
        <Link
          to="experience"
          onClick={() => {
            setActiveNav("#experience");
            document.title = "Sachin ~ Skills";
          }}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook className="menuicons" />
          Skills
        </Link>
        <Link
          to="portfolio"
          onClick={() => {
            setActiveNav("#portfolio");
            document.title = "Sachin ~ Portfolio";
          }}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <RiServiceLine className="menuicons" />
          Projects
        </Link>
        <Link
          to="contact"
          onClick={() => {
            setActiveNav("#contact");
            document.title = "Sachin ~ Contact";
          }}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail className="menuicons" />
          Contact
        </Link>
        <span onClick={handleDownload}>
          <a href={RESUME} download className="btn">
            Download CV
          </a>
        </span>
      </nav>
      <nav id="nav_mobile">
        <Link
          to="header"
          onClick={() => {
            setActiveNav("#");
            document.title = "Sachin ~ Hero";
          }}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </Link>
        <Link
          to="about"
          onClick={() => {
            setActiveNav("#about");
            document.title = "Sachin ~ About";
          }}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </Link>
        <Link
          to="experience"
          onClick={() => {
            setActiveNav("#experience");
            document.title = "Sachin ~ Skills";
          }}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </Link>
        <Link
          to="portfolio"
          onClick={() => {
            setActiveNav("#portfolio");
            document.title = "Sachin ~ Portfolio";
          }}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <RiServiceLine />
        </Link>
        <Link
          to="contact"
          onClick={() => {
            setActiveNav("#contact");
            document.title = "Sachin ~ Contact";
          }}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
