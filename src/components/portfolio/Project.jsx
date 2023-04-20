import React from "react";
import "./portfolio.css";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

const Project = ({
  image,
  description,
  name,
  clone,
  github,
  deployed,
  tech,
}) => {
  return (
    <div className="portfolio_card_div">
      <img src={image} alt={name} draggable="false" />
      <div className="portfolio_card_details">
        <p id="techStack">
          {" "}
          <span className="techstack_name">Tech Stack:- </span>
          {tech}
        </p>
        <h1>
          {name}
          <span>{clone}</span>
        </h1>
        <p>{description}</p>
        <div className="portfolio_links">
          <a target={"_blank"} rel="noreferrer" href={github}>
            <AiFillGithub className="portfolio_link_icons" />
          </a>
          <a target={"_blank"} rel="noreferrer" href={deployed}>
            <AiFillEye className="portfolio_link_icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
