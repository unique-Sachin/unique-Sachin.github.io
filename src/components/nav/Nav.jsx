import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav id="nav">
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
  );
};

export default Nav;
