import React from "react";
import "./portfolio.css";
import ME from "../../assets/ME.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* <div className="portfolio_card">
          <div className="portfolio_imgbox">
            <img src={ME} alt="me" />
          </div>
          <div className="portfolio_content">
            <div className="port_details">
              <h2>Sachin Mishra</h2>
              <span>Full Stack Web Developer</span>
              <div className="port_data">
                <h3>342</h3>
                <span>Posts</span>
                <h3>500</h3>
                <span>Followers</span>
                <h3>100</h3>
                <span>Following</span>
              </div>
              <div className="port_action_Btn">
                <button>Follow</button>
                <button>Message</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
