import React from "react";
import "./about.css";
import { GrStackOverflow } from "react-icons/gr";
import { SiCodingninjas } from "react-icons/si";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem temporibus provident mollitia, qui earum itaque.
            Itaque optio blanditiis numquam sunt distinctio? Veritatis, ab!
            Facere ab sit unde odit praesentium perspiciatis?
          </p>
          
        </div>
      </div> */}
      <div id="header" className="container about__container">
        <div className="about_container_left">
          <h1 className="full_stack_heading">FULL STACK</h1>
          <h1 className="web_developer_heading">WEB DEVELOPER</h1>
          <div className="about__cards">
            <article className="about__card">
              <SiCodingninjas className="about__icon" />
              <h5>Coding</h5>
              <small>1500+ Hours</small>
            </article>
            <article className="about__card">
              <GrStackOverflow className="about__icon" />
              <h5>DSA</h5>
              <small>450+ Questions Solved</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
            <article className="about__card">
              <BsGithub className="about__icon" />
              <h5>GitHub</h5>
              <small>1000+ Contributions</small>
            </article>
          </div>
        </div>
        <div className="about_container_right">
          <div>
            <h1 className="full_stack_heading">7+</h1>
            <p>Months of Intense Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
