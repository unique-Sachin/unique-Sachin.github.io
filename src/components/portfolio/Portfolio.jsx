import React from "react";
import "./portfolio.css";
import befit1 from "../../assets/befit1.jpg";
import sparkle1 from "../../assets/sparkle1.jpg";
import zee1 from "../../assets/zee1.jpg";
import giphy from "../../assets/giphy.jpg";
import gadgetrambo1 from "../../assets/gadgetrambo1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./Project";

const Portfolio = () => {
  const projectsData = [
    {
      name: "GadgetRambo.com",
      description:
        "This website had been created to target tech-geeks to explore tech gadgets and tech related news. It was a group project with 5 team members",
      image: gadgetrambo1,
      github: "https://github.com/unique-Sachin/GadgetRambo",
      deployed: "https://gadget-rambo.netlify.app",
      tech: "TypeScript | NextJS | Redux | Firebase",
    },
    {
      name: "Be.Fit.com",
      description:
        "Be.FIt is an online platform for fitness guidance with a range of trainer-led, group workout classes. It was a solo project, completed in 5 days",
      image: befit1,
      github: "https://github.com/unique-Sachin/glorious-part-9543",
      deployed: "https://glorious-part-9543-qpf7.vercel.app",
      tech: "JavaScript | ReactJS | JSON Server",
    },
    {
      name: "Sparkle.com",
      description:
        "Sparkle.com is an e-commerce platform for ladies to purchase cosmetics and makeup products. It was collab project of 4 team members.",
      image: sparkle1,
      github: "https://github.com/sarfraj0304/abject-history-7359",
      deployed: "https://sparkle-mauve.vercel.app",
      tech: "HTML | CSS | JavaScript | JSON-Server",
    },
    {
      name: "Zee5.com",
      description:
        "It's frontend clone of Zee5 which offers an exhaustive array of content; with live TV channels and hours of viewing across most of the languages.",
      image: zee1,
      github: "https://github.com/unique-Sachin/faded-cat-6669",
      deployed: "https://rainbow-sorbet-8c099a.netlify.app",
      tech: "HTML | CSS | JavaScript",
      clone: "[Clone]",
    },
    {
      name: "Giphy",
      description:
        "A simple app where you can search animated GIF images. Its taking data from original giphy's API.",
      image: giphy,
      github: "",
      deployed: "https://giphy-be-animated.netlify.app",
      tech: "HTML | CSS | JavaScript",
    },
  ];
  let settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className="portfolio_container">
          <Slider className="projects_container" {...settings}>
            {projectsData.map((project, id) => (
              <Project {...project} key={id} />
            ))}
          </Slider>
          <div className="bg_texture" />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
