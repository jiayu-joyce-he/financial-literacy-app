import React, { useState } from "react";
import Layout from "../components/layout";
import UnitContent from "../components/unit-content";
import SEO from "../components/seo";

const Unit3 = () => {
  // Set initial progress for all the sections in this unit
  const initialProgress = {
    section1: [0, 3],
    section2: [0, 2],
    section3: [0, 7],
    section4: [0, 4],
    section5: [1, 1],
  };

  const [progress, setProgress] = useState(initialProgress);

  // Set learning goals for this unit
  const learningGoals = [
    "1. Understand that risk affects short term and long term return on investment.",
    "2. Understand that long-term investment is less risky.",
    "3. Understand that liquidity affects the ability to convert an investment to cash.",
    "4. Associate goals with different kinds of investments based on time, risk, and liquidity.",
  ];

  const content = [
    {
      sectionName: "Risk & Return",
      sectionId: "section1",
      totalSteps: 2,
      content: "content png path",
    },
    {
      sectionName: "Risk Factors",
      sectionId: "section2",
      totalSteps: 3,
      content: "content 1",
    },
    {
      sectionName: "Different Investment Tools",
      sectionId: "section3",
      totalSteps: 3,
      content: "content 1",
    },
    {
      sectionName: "Test Yourself",
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
        unitId={3}
        unitTitle="Unit 3: How do my attitudes and goals affect what happens to my money?"
        learningGoals={learningGoals}
        content={content}
        progress={progress}
        setProgress={setProgress}
      />
    </Layout>
  );
};

export default Unit3;
