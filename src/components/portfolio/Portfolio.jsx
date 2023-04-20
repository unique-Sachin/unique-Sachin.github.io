import React from "react";
import "./portfolio.css";
import befit1 from "../../assets/befit1.jpg";
import sparkle1 from "../../assets/sparkle1.jpg";
import zee1 from "../../assets/zee1.jpg";
import gadgetrambo1 from "../../assets/gadgetrambo1.jpg";
import shopoffer1 from "../../assets/shopoffer1.jpg";
import chat_chat1 from "../../assets/ch-chat1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./Project";

const Portfolio = () => {
  const projectsData1 = [
    {
      name: "CH-chat-app",
      description:
        "CH-chat-app enables a seamless real-time communication experience with instant messaging and video calls. Completed as an individual project within 15 days",
      image: chat_chat1,
      github: "https://github.com/unique-Sachin/CH-chat-app",
      deployed: "https://ch-chat-app.vercel.app",
      tech: "Next.js | Redux-Toolkit | MongoDB | Socket.io",
    },
    {
      name: "GadgetRambo.com",
      description:
        "This website had been created to target tech-geeks to explore tech gadgets and tech related news. It was a group project with 5 team members",
      image: gadgetrambo1,
      github: "https://github.com/unique-Sachin/GadgetRambo",
      deployed: "https://gadget-rambo.vercel.app/",
      tech: "TypeScript | Next.js | Redux | Firebase",
    },
    {
      name: "Snapdeal.com",
      description:
        "Snapdeal is an e-commerce platform. It brings together a wide assortment of good quality and value-priced merchandise on its platform. It was a group project with 5 team members",
      image: shopoffer1,
      github: "https://github.com/ranjankumar9/Shop-offer",
      deployed: "https://shopoffer.vercel.app/",
      tech: "React.js | Node.js | MongoDB | ChakraUI",
      clone: "[Clone]",
    },
    {
      name: "Be.Fit.com",
      description:
        "Be.FIt is an online platform for fitness guidance with a range of trainer-led, group workout classes. It was a solo project, completed in 5 days",
      image: befit1,
      github: "https://github.com/unique-Sachin/glorious-part-9543",
      deployed: "https://glorious-part-9543-qpf7.vercel.app",
      tech: "JavaScript | React.js | JSON Server",
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
  ];

  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className="portfolio_container">
          <div className="projects_container">
            {projectsData1.map((project, id) => (
              <Project {...project} key={id} />
            ))}
          </div>
          <div className="bg_texture" />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
