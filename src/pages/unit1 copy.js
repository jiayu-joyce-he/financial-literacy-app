import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import {
  StyledUnitBannerWrapper,
  StyledSectionWrapper,
} from "../components/SharedStyledComponents";
import LoadingButton from "../components/LoadingButton";

const Unit1 = () => {
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
        section1: file(relativePath: { eq: "unit1-section1.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const LearningGoalBackground =
    data.LearningGoalBackground.childImageSharp.fluid;
  //   const imageData = data.desktop.childImageSharp.fluid;

  const StyledInnerWrapper = styled.div`
    min-height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
  `;

  const [sectionNum, setSectionNum] = useState(0);

  const Section1 = () => {
    return (
      <StyledSectionWrapper>
        <h3>Section 1</h3>
      </StyledSectionWrapper>
    );
  };

  const Section2 = () => {
    return <h3>Section 2</h3>;
  };

  const Section3 = () => {
    return <h3>Section 3</h3>;
  };

  const Section4 = () => {
    return <h3>Section 4</h3>;
  };

  const Section5 = () => {
    return <h3>Section 5</h3>;
  };

  const UnitProgress = () => {
    return (
      <StyledUnitBannerWrapper>
        <h1>Unit 1: What is the time value of money?</h1>
        <ProgressBar variant="success" now={40} />
      </StyledUnitBannerWrapper>
    );
  };

  return (
    <Layout>
      <SEO title="Home" />
      <UnitProgress />
      <BackgroundImage fluid={LearningGoalBackground}>
        <StyledInnerWrapper>
          <h2>{`sectionNum is ${sectionNum}`}</h2>
        </StyledInnerWrapper>
      </BackgroundImage>
      {sectionNum >= 1 && <Section1 />}
      {sectionNum >= 2 && <Section2 />}
      {sectionNum >= 3 && <Section3 />}
      {sectionNum >= 4 && <Section4 />}
      <LoadingButton setSectionNum={setSectionNum} sectionNum={sectionNum} />
    </Layout>
  );
};

export default Unit1;
