import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const LearningGoals = ({ learningGoals }) => {
  const data = useStaticQuery(
    graphql`
      query {
        LearningGoalBackground: file(
          relativePath: { eq: "learning-goals-background.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const LearningGoalBackground =
    data.LearningGoalBackground.childImageSharp.fluid;

  const StyledInnerWrapper = styled.div`
    min-height: 500px;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-left: 20%;
    div {
      margin: auto;
    }
  `;

  return (
    <BackgroundImage fluid={LearningGoalBackground}>
      <StyledInnerWrapper>
        <div>
          {learningGoals.map(e => (
            <p>{e}</p>
          ))}
        </div>
      </StyledInnerWrapper>
    </BackgroundImage>
  );
};

export default LearningGoals;
