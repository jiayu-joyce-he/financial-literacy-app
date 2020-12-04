import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const Summaries = () => {
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
      }
    `
  );

  const currentUnit = window.location.href.split("/")[1]
    ? window.location.href.split("/")[1]
    : "unit1";

  console.log("currentUnit", currentUnit);

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
    <BackgroundImage fluid={data[currentUnit].childImageSharp.fluid}>
      <StyledInnerWrapper>
        <div>
          {/* {learningGoals.map(e => (
            <p>{e}</p>
          ))} */}
        </div>
      </StyledInnerWrapper>
    </BackgroundImage>
  );
};

export default Summaries;
