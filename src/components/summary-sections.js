import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

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

const StyledImageWrapper = styled.div`
  min-height: 500px;
  margin: auto;
`;

const Summaries = ({ currentUnit }) => {
  const data = useStaticQuery(
    graphql`
      query {
        unit1: file(relativePath: { eq: "unit1summary.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        unit2: file(relativePath: { eq: "unit2summary.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  return (
    // <BackgroundImage fluid={data["unit" + currentUnit].childImageSharp.fluid}>
    //   <StyledInnerWrapper></StyledInnerWrapper>
    // </BackgroundImage>
    <StyledImageWrapper>
      <Img fluid={data["unit" + currentUnit].childImageSharp.fluid} />
    </StyledImageWrapper>
  );
};

export default Summaries;
