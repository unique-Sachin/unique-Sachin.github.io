import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

const App = () => {
  return (
    <div>
      {/* <Nav/> */}
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
            <Header />
          </FullpageSection>
          <FullpageSection>
            <About />
          </FullpageSection>
          <FullpageSection>
            <Experience />
          </FullpageSection>
          <FullpageSection>
            <Portfolio />
          </FullpageSection>
          <FullpageSection>
            <Contact />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default App;
