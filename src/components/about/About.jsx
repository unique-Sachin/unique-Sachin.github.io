import React from "react";
import "./about.css";
import { GrStackOverflow } from "react-icons/gr";
import { SiCodingninjas } from "react-icons/si";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
import CV from "../../assets/Sachin_Mishra_Resume.pdf";
import { FaHeadphonesAlt } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";
import { TbMotorbike } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
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

      <h5>Get To Know</h5>
      <h2>About Me</h2>
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
            <h1 className="full_stack_heading">PERSONAL DETAILS &</h1>
            <h1 className="web_developer_heading">MY INTERESTS</h1>
            <div className="about_content">
              <div className="details_table">
                <table>
                  <tbody>
                    <tr>
                      <td>Birthday</td>
                      <td>20 Feb 2002</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>+91 7080623634</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>sachin.mern@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>Jaunpur, Uttar Pradesh, India</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="interests_cards">
                <div className="interest_card">
                  <FaHeadphonesAlt className="interest_icons" />
                  <small>MUSIC</small>
                </div>
                <div className="interest_card">
                  <TbPlaneInflight className="interest_icons" />
                  <small>TRAVEL</small>
                </div>
                <div className="interest_card">
                  <TbMotorbike className="interest_icons" />
                  <small>BIKE</small>
                </div>
                <div className="interest_card">
                  <GiWorld className="interest_icons" />
                  <small>FOR.AFF.</small>
                </div>
              </div>
            </div>
              <div className="cta">
                <a href={CV} download className="btn">
                  Download CV
                </a>
                <a href="#contact" className="btn btn-primary">
                  Let's Talk
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
