import React from "react";
import "./about.css";
import { GrStackOverflow } from "react-icons/gr";
import { SiCodingninjas } from "react-icons/si";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";
import { TbMotorbike } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import RESUME from "../../assets/Sachin_Mishra_Resume.pdf";
import { useNavigate } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";

const About = ({ theme }) => {
  const navigate = useNavigate();
  const handleDownload = () => {
    navigate(
      "https://drive.google.com/file/d/1uYU19l4k_t7pBG1ad_0w-95FqybOHZI6/view?usp=share_link"
    );
  };
  console.log(theme);
  return (
    <>
      <section id={"about"}>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about_container_left">
            <h1 className="full_stack_heading">FULL STACK</h1>
            <h1 className="web_developer_heading">WEB DEVELOPER</h1>
            <div className="about__cards">
              <article className="about__card">
                <SiCodingninjas className="about__icon" />
                <h5>Coding</h5>
                <small>1200+ Hours</small>
              </article>
              <article className="about__card">
                <GrStackOverflow className="about__icon" />
                <h5>DSA</h5>
                <small>450+ Questions Solved</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>4+ Completed</small>
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
                <a href={RESUME} download className="btn">
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
      <section id="github">
        <h2>GitHub Calender</h2>
        <div className="container github_container">
          <div className="github_left">
            <GitHubCalendar
              color={
                theme === "yellow"
                  ? "#dabc34"
                  : theme === "pink"
                  ? "#e52165"
                  : theme === "green"
                  ? "#89da90"
                  : theme === "blue"
                  ? "#14b3a8"
                  : "#8e55cf"
              }
              blockRadius={3}
              blockMargin={6}
              blockSize={16}
              username="unique-sachin"
            />
          </div>
          <h2 style={{ color: "var(--color-primary)", marginBbottom: "2rem",textAlign:"center" }}>
            GitHub Stats
          </h2>
          <div className="github_right">
            <img
              draggable="false"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=unique-sachin&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c"
              alt=""
            />
            <img
              draggable="false"
              src="https://github-readme-streak-stats.herokuapp.com/?user=unique-sachin&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8"
              alt=""
            />
            <img
              draggable="false"
              src="https://github-readme-activity-graph.cyclic.app/graph?username=unique-sachin&theme=react-dark&hide_border=false"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
