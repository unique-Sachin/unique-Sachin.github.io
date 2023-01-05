import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/experience/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
