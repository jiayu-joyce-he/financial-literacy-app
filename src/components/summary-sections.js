import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

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
        unit3: file(relativePath: { eq: "unit3summary.png" }) {
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
    <StyledImageWrapper>
      <Img fluid={data["unit" + currentUnit].childImageSharp.fluid} />
    </StyledImageWrapper>
  );
};

export default Summaries;
