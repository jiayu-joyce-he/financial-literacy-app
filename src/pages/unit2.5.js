import React, { useState } from "react";
import Layout from "../components/layout";
import UnitContent from "../components/unit-content";
import SEO from "../components/seo";

const OptionalUnit = () => {
  // Set initial progress for all the sections in this unit
  const initialProgress = {
    section1: [0, 2],
    section2: [0, 4],
    section3: [0, 3],
    section4: [0, 4],
    section5: [1, 1],
  };

  const [progress, setProgress] = useState(initialProgress);

  // Set learning goals for this unit
  const learningGoals = [
    "1. Understand that interest is a percent of money that is borrowed or invested. ",
    "2. Understand that time affects the monetary value of money invested due to interest and inflation.",
    "3. Understand that inflation decreases the intrinsic value of cash over time.",
  ];

  const content = [
    {
      sectionName: "Test Yourself",
      sectionId: "section1",
      totalSteps: 2,
      content: "content png path",
    },
    {
      sectionName: "Time is Money",
      sectionId: "section2",
      totalSteps: 3,
      content: "content 1",
    },
    {
      sectionName: "What is Interest?",
      sectionId: "section3",
      totalSteps: 3,
      content: "content 1",
    },
    {
      sectionName: "Inflation",
      sectionId: "section4",
      totalSteps: 4,
      content: "content 1",
    },
    {
      sectionName: "Summary",
      sectionId: "section5",
      totalSteps: 1,
      content: "content 1",
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <UnitContent
        unitId={1}
        unitTitle="Unit 1: What is the time value of money?"
        learningGoals={learningGoals}
        content={content}
        progress={progress}
        setProgress={setProgress}
      />
    </Layout>
  );
};

export default OptionalUnit;
