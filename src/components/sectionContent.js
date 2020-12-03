import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Unit1Section1 from "../components/Unit1Section1";
import Unit1Section2 from "../components/Unit1Section2";

const SectionContent = ({ content, currentSection, progress, setProgress }) => {
  console.log("currentSection is:", currentSection);

  const CurrentSectionContent = () => {
    switch (currentSection.slice(-1)) {
      case "1":
        return <Unit1Section1 progress={progress} />;

      case "2":
        return <Unit1Section2 progress={progress} />;
      case "3":
      // return(<Unit1Section3 progress={progress} />)
      case "4":
      // return(<Unit1Section4 progress={progress} />)
    }
    // if (currentSection.slice(-1) == 1) {
    //   return <Unit1Section1 progress={progress} />;
    // } else if (currentSection.slice(-1) == 2) {
    //   return <Unit1Section2 progress={progress} />;
    // } else {
    //   return <Unit1Section1 progress={progress} />;
    // }
    // // else if (currentSection.slice(-1) == 3) {
    // //   return <Unit1Section1 progress={progress} />;
    // // } else if (currentSection.slice(-1) == 4) {
    // //   return <Unit1Section1 progress={progress} />;
    // // }
  };

  return (
    <>
      {currentSection != "learning_goals" && <CurrentSectionContent />}
      {/* <Unit1Section1 progress={progress} /> */}
    </>
  );
};

export default SectionContent;
