import React from "react";

import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

const Dummy = () => {
  const sectionStyles = {
    height: "100vh",
    width: "100%",
    display: "flex",
    
  };
  return (
    <Fullpage>
      <FullpageNavigation/>
        <FullPageSections>
          <FullpageSection style={sectionStyles}>
            <h1>HII</h1>
          </FullpageSection>
          <FullpageSection style={sectionStyles}>
            <h1>HII</h1>
          </FullpageSection>
          <FullpageSection style={sectionStyles}>
            <h1>HII</h1>
          </FullpageSection>
        </FullPageSections>
    </Fullpage>
  );
};

export default Dummy;
