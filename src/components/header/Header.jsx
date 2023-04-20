import React from "react";
import "./header.css";
import ME from "../../assets/ME.png";
import HeaderSocials from "./HeaderSocials";
const Header = ({ setTheme }) => {
  const handleSetTheme = (value) => {
    localStorage.clear("theme");
    localStorage.setItem("theme", value);
    setTheme(localStorage.getItem("theme"));
    console.log(localStorage.getItem("theme"));
  };
  return (
    <header>
      <div id="header" className="container header__container">
        <div className="header_container_left">
          <div className="portfolio_card">
            <div className="portfolio_imgbox">
              <img src={ME} alt="me" />
            </div>
            <div className="portfolio_content">
              <div className="port_details">
                <div className="port_action_Btn">
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://www.linkedin.com/in/sachin-mishra-a790bb174"
                  >
                    <button>Follow</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <HeaderSocials />
        </div>
        <div className="header_container_right">
          <span
            onClick={() => handleSetTheme("yellow")}
            class="circle-one animated-circle position-relative"
          ></span>
          <span
            onClick={() => handleSetTheme("pink")}
            class="circle-two animated-circle position-relative"
          ></span>
          <span
            onClick={() => setTheme("green")}
            class="circle-three animated-circle position-relative"
          ></span>
          <span
            onClick={() => setTheme("blue")}
            class="circle-four animated-circle position-relative"
          ></span>
          <span
            onClick={() => setTheme("orange")}
            class="circle-five animated-circle position-relative"
          ></span>
          <h1 className="greeting_hello">HELLO, I AM</h1>
          <h1 className="greeting_name">SACHIN MISHRA.</h1>
          <p>
            A full stack web developer with a deep knowledge of the latest
            technologies, including React, Next.js, Node.js, and MongoDB, and
            extensive experience solving over 600 DSA questions and spending
            more than 1500 hours coding. With a track record of success on 6 major projects
            and numerous smaller ones, I am confident in my ability to tackle
            complex challenges and deliver results.
          </p>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
