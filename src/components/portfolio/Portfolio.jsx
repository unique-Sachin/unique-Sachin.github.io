import React from "react";
import "./portfolio.css";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { GoDeviceCameraVideo } from "react-icons/go";
import befit1 from "../../assets/befit1.jpg";
import calculator from "../../assets/calculator.jpg";
import sparkle1 from "../../assets/sparkle1.jpg";
import zee1 from "../../assets/zee1.jpg";
import giphy from "../../assets/giphy.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <Slider {...settings}>
          <div className="portfolio_card_div">
            <img src={befit1} alt="" />
            <div class="content-overlay"></div>
            <div className="portfolio_card_details fadeIn-top">
              <h1>Be.Fit.com</h1>
              <p>
                Be.FIt is an online platform for fitness guidance with a range
                of trainer-led, group workout classes. It was a solo project and
                was completed in 5 days.
              </p>
              <div className="portfolio_links">
                <AiFillGithub className="portfolio_link_icons" />
                <AiFillEye className="portfolio_link_icons" />
                <GoDeviceCameraVideo className="portfolio_link_icons" />
              </div>
            </div>
          </div>
          <div className="portfolio_card_div">
            <img src={sparkle1} alt="" />
            <div class="content-overlay"></div>
            <div className="portfolio_card_details fadeIn-top">
              <h1>Sparkle.com</h1>
              <p>
                Sparkle.com is an e-commerce platform for ladies to purchase
                cosmetics and makeup products. A collaborative project with 4
                members, was completed in 5 days.
              </p>
              <div className="portfolio_links">
                <AiFillGithub className="portfolio_link_icons" />
                <AiFillEye className="portfolio_link_icons" />
                <GoDeviceCameraVideo className="portfolio_link_icons" />
              </div>
            </div>
          </div>
          <div className="portfolio_card_div">
            <img src={zee1} alt="" />
            <div class="content-overlay"></div>
            <div className="portfolio_card_details fadeIn-top">
              <h1>
                Zee5.com <span>[Clone]</span>
              </h1>
              <p>
                It's frontend clone of Zee5 which offers an exhaustive array of
                content; with live TV channels and hours of viewing across most
                of the languages, making it a complete video destination for OTT
                viewers.
              </p>
              <div className="portfolio_links">
                <AiFillGithub className="portfolio_link_icons" />
                <AiFillEye className="portfolio_link_icons" />
                <GoDeviceCameraVideo className="portfolio_link_icons" />
              </div>
            </div>
          </div>
          <div className="portfolio_card_div">
            <img src={calculator} alt="" />
            <div class="content-overlay"></div>
            <div className="portfolio_card_details fadeIn-top">
              <h1>Calculator</h1>
              <p>
                It's a simple calculator I have created for my friend "Akash".
                It is fully functional.
              </p>
              <div className="portfolio_links">
                <AiFillGithub className="portfolio_link_icons" />
                <AiFillEye className="portfolio_link_icons" />
                <GoDeviceCameraVideo className="portfolio_link_icons" />
              </div>
            </div>
          </div>
          <div className="portfolio_card_div">
            <img src={giphy} alt="" />
            <div class="content-overlay"></div>
            <div className="portfolio_card_details fadeIn-top">
              <h1>Giphy</h1>
              <p>
                A simple app where you can search animated GIF images. Its
                taking data from original giphy's API.
              </p>
              <div className="portfolio_links">
                <AiFillGithub className="portfolio_link_icons" />
                <AiFillEye className="portfolio_link_icons" />
                <GoDeviceCameraVideo className="portfolio_link_icons" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
