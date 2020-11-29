import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const SectionContent = ({ sectionContent }) => {
  //   const data = useStaticQuery(
  //     graphql`
  //       query {
  //         LearningGoalBackground: file(
  //           relativePath: { eq: "learning-goals-background.png" }
  //         ) {
  //           childImageSharp {
  //             fluid(quality: 90, maxWidth: 1920) {
  //               ...GatsbyImageSharpFluid_withWebp
  //             }
  //           }
  //         }
  //       }
  //     `
  //   );

  //   const LearningGoalBackground =
  //     data.LearningGoalBackground.childImageSharp.fluid;

  const StyledInnerWrapper = styled.div`
    min-height: 500px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    div {
      margin: auto;
    }
  `;

  return (
    // <BackgroundImage fluid={LearningGoalBackground}>
    <StyledInnerWrapper>
      <p>content</p>
    </StyledInnerWrapper>
    // </BackgroundImage>
  );
};

export default SectionContent;
