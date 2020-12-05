import React from "react";
import Unit1Section1 from "../components/Unit1Section1";
import Unit1Section2 from "../components/Unit1Section2";
import Unit1Section3 from "../components/Unit1Section3";
import Unit1Section4 from "../components/Unit1Section4";
import Summaries from "../components/Summaries";
import Unit2Section1 from "../components/Unit2Section1";
import Unit2Section2 from "../components/Unit2Section2";
import Unit2Section3 from "../components/Unit2Section3";
import Unit2Section4 from "../components/Unit2Section4";

const SectionContent = ({
  currentUnit,
  currentSection,
  progress,
  setProgress,
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
            <Unit1Section4 progress={progress} setProgress={setProgress} />
          );
        case "5":
          return <Summaries currentUnit={currentUnit} />;
      }
    } else if (currentUnit == 2) {
      switch (currentSection.slice(-1)) {
        case "1":
          return (
            <Unit2Section1 progress={progress} setProgress={setProgress} />
          );
        case "2":
          return <Unit2Section2 progress={progress} />;
        case "3":
          return <Unit2Section3 progress={progress} />;
        case "4":
          return <Summaries currentUnit={currentUnit} />;
        case "5":
          return <Unit2Section4 progress={progress} />;
      }
    }
  };

  return <>{currentSection != "learning_goals" && <CurrentSectionContent />}</>;
};

export default SectionContent;
