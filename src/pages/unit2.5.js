import React, { useState } from "react";
import Layout from "../components/layout";
import UnitContent from "../components/unit-content";
import SEO from "../components/seo";

const OptionalUnit = () => {
  // Set initial progress for all the sections in this unit
  const initialProgress = {
    section1: [0, 3],
    section2: [0, 4],
    section3: [0, 3],
    section4: [0, 4],
    section5: [1, 1],
  };

  const [progress, setProgress] = useState(initialProgress);

  // Set learning goals for this unit
  const learningGoals = [
    "1. Understand that simple interest is calculated based only on principal balance.",
    "2. Understand that compound interest is calculated based on the principal and interest accrued over time.",
    "3. Perform simple interest problems using the simple interest equation.",
    "4. Perform compound interest problems using the compound interest equation.",
  ];

  const content = [
    {
      sectionName: "Calculating Simple Interest",
      sectionId: "section1",
    },
    {
      sectionName: "Calculating Compound Interest",
      sectionId: "section2",
    },
    {
      sectionName: "Simple Interest Practice",
      sectionId: "section3",
    },
    {
      sectionName: "Compound Interest Practice",
      sectionId: "section4",
    },
    {
      sectionName: "Summary",
      sectionId: "section5",
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <UnitContent
        unitId={2.5}
        unitTitle="Optional Unit: How to calculate interest?"
        learningGoals={learningGoals}
        content={content}
        progress={progress}
        setProgress={setProgress}
      />
    </Layout>
  );
};

export default OptionalUnit;
