import React from "react";
import Unit1Section1 from "./unit1-section1";
import Unit1Section2 from "./unit1-section2";
import Unit1Section3 from "./unit1-section3";
import Unit1Section4 from "./unit1-section4";
import Summaries from "./summary-sections";
import Unit2Section1 from "./unit2-section1";
import Unit2Section2 from "./unit2-section2";
import Unit2Section3 from "./unit2-section3";
import Unit2Section4 from "./unit2-section4";
import Unit3Section1 from "./unit3-section1";
import Unit3Section2 from "./unit3-section2";
import Unit3Section3 from "./unit3-section3";
import Unit3Section4 from "./unit3-section4";

const SectionContent = ({
  currentUnit,
  currentSection,
  progress,
  setProgress,
  changeSection,
}) => {
  const CurrentSectionContent = () => {
    if (currentUnit == 1) {
      switch (currentSection.slice(-1)) {
        case "1":
          return <Unit1Section1 progress={progress} />;

        case "2":
          return <Unit1Section2 progress={progress} />;
        case "3":
          return <Unit1Section3 progress={progress} />;
        case "4":
          return (
            <Unit1Section4
              progress={progress}
              setProgress={setProgress}
              changeSection={changeSection}
            />
          );
        case "5":
          return <Summaries currentUnit={currentUnit} />;
      }
    } else if (currentUnit == 2) {
      switch (currentSection.slice(-1)) {
        case "1":
          return (
            <Unit2Section1
              progress={progress}
              setProgress={setProgress}
              changeSection={changeSection}
            />
          );
        case "2":
          return <Unit2Section2 progress={progress} />;
        case "3":
          return <Unit2Section3 progress={progress} />;
        case "4":
          return <Summaries currentUnit={currentUnit} />;
        case "5":
          return <Unit2Section4 />;
      }
    } else if (currentUnit == 3) {
      switch (currentSection.slice(-1)) {
        case "1":
          return (
            <Unit3Section1
              progress={progress}
              setProgress={setProgress}
              changeSection={changeSection}
            />
          );
        case "2":
          return <Unit3Section2 progress={progress} />;
        case "3":
          return <Unit3Section3 progress={progress} />;
        case "4":
          return <Unit3Section4 progress={progress} />;
        case "5":
          return <Summaries currentUnit={currentUnit} />;
      }
    }
  };

  return (
    <>{currentSection !== "learning_goals" && <CurrentSectionContent />}</>
  );
};

export default SectionContent;
