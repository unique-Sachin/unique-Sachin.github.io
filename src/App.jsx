import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/experience/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  const [theme, setTheme] = useState("yellow");
  return (
    <div data-theme-color={theme} className="fullpage-section">
      <Nav theme={theme} />
      <Header theme={theme} setTheme={setTheme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Portfolio theme={theme} />
      <Contact theme={theme} />
    </div>
  );
};

export default App;
