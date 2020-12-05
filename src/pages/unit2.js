import React, { useState } from "react";
import Layout from "../components/layout";
import UnitContent from "../components/UnitContent";
import SEO from "../components/seo";

const Unit2 = () => {
  // Set initial progress for all the sections in this unit
  // TODO: update this
  const initialProgress = {
    section1: [0, 3],
    section2: [0, 6],
    section3: [0, 3],
    section4: [0, 4],
    section5: [0, 1],
  };

  const [progress, setProgress] = useState(initialProgress);

  // Set learning goals for this unit
  const learningGoals = [
    "1. Understand that simple interest and compound interest are different.",
    "2. Understand that money grows faster with compound interest.",
    "3. Understand that the earlier you start saving the better you can leverage the power of compound interest.",
    "4. Practice using an online tool to calculate potential interest on investments and loans.",
  ];

  const content = [
    {
      sectionName: "Introduction to Interest",
      sectionId: "section1",
    },
    {
      sectionName: "Compound Interest",
      sectionId: "section2",
    },
    {
      sectionName: "Examples",
      sectionId: "section3",
    },
    {
      sectionName: "Practices",
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
        unitId={2}
        unitTitle="Unit 2"
        learningGoals={learningGoals}
        content={content}
        progress={progress}
        setProgress={setProgress}
      />
    </Layout>
  );
};

export default Unit2;
