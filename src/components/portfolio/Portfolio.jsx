import React from "react";
import "./portfolio.css";
import befit1 from "../../assets/befit1.jpg";
import calculator from "../../assets/calculator.jpg";
import sparkle1 from "../../assets/sparkle1.jpg";
import zee1 from "../../assets/zee1.jpg";
import giphy from "../../assets/giphy.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./Project";

const Portfolio = () => {
  const projectsData = [
    {
      name: "Be.Fit.com",
      description:
        "Be.FIt is an online platform for fitness guidance with a range of trainer-led, group workout classes. It was a solo project and was completed in 5 days",
      image: befit1,
      github: "https://github.com/unique-Sachin/glorious-part-9543",
      deployed: "https://glorious-part-9543-qpf7.vercel.app",
      video: "",
      tech: "HTML | CSS | JavaScript | React | JSON Server",
    },
    {
      name: "Sparkle.com",
      description:
        "Sparkle.com is an e-commerce platform for ladies to purchase cosmetics and makeup products. A collaborative project with 4 members.",
      image: sparkle1,
      github: "https://github.com/sarfraj0304/abject-history-7359",
      deployed: "https://sparkle-mauve.vercel.app",
      video: "",
      tech: "HTML | CSS | JavaScript | JSON-Server",
    },
    {
      name: "Zee5.com",
      description:
        "It's frontend clone of Zee5 which offers an exhaustive array of content; with live TV channels and hours of viewing across most of the languages.",
      image: zee1,
      github: "https://github.com/unique-Sachin/faded-cat-6669",
      deployed: "https://rainbow-sorbet-8c099a.netlify.app",
      video: "",
      tech: "HTML | CSS | JavaScript",
      clone: "[Clone]",
    },
    {
      name: "Calculator",
      description:
        "It's a simple calculator I have created for my friend Akash. It is functional.",
      image: calculator,
      github: "",
      deployed: "https://akas-ka-calculator.netlify.app",
      video: "",
      tech: "HTML | CSS | JavaScript",
    },
    {
      name: "Giphy",
      description:
        "A simple app where you can search animated GIF images. Its taking data from original giphy's API.",
      image: giphy,
      github: "",
      deployed: "https://giphy-be-animated.netlify.app",
      video: "",
      tech: "HTML | CSS | JavaScript",
    },
  ];
  let settings = {
    infinite: true,
    speed: 500,
    lazyLoad: true,
    autoplaySpeed: 3000,
    slidesToShow: matchMedia("(max-width: 1024px)").matches ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
          <Slider {...settings}>
            {projectsData.map((project) => (
              <Project {...project} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
