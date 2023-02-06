import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sachin-mishra-a790bb174/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/unique-Sachin"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/im_unique_sachin"
        rel="noreferrer"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
