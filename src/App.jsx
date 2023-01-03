import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
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
            <Services />
          </FullpageSection>
          <FullpageSection>
            <Portfolio />
          </FullpageSection>
          <FullpageSection>
            <Testimonials />
          </FullpageSection>
          <FullpageSection>
            <Contact />
          </FullpageSection>
          <FullpageSection>
            <Footer />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default App;
