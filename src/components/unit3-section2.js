import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { Button, Table, FormControl, InputGroup } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

const StyledInstructionalContent = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2rem;

  table {
    margin: 2rem auto;
  }

  .bubble {
    position: relative;
    background: #d9d9d9;
    border-color: #ffe599;
    border-radius: 1rem;
    padding: 1rem;
    text-align: left;
    color: #000;
  }

  .bubble-bottom-left:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 24px solid #d9d9d9;
    border-left: 12px solid transparent;
    border-bottom: 12px solid #d9d9d9;
    border-top: 20px solid transparent;
    left: 32px;
    top: -24px;
  }

  .btn.active {
    background-color: #ffe599 !important;
    border-color: #434343 !important;
    color: #434343 !important;
  }

  .center {
    display: flex;
    margin-top: 1rem;
    button {
      margin: auto;
      width: 8rem;
      margin-bottom: 2rem;
    }
  }

  p {
    margin-top: 1rem;
  }

  .row {
    margin-top: 1rem;
  }

  .response {
    color: #434343;
    border-color: #434343;
    margin: 0.25rem;
    z-index: 1;

    #selected {
      background-color: #ffe599;
    }

    :active {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
    :hover {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
    :focus {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
  }

  .highlight {
    background-color: #ffe599;
  }
`;

const Unit3Section1 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section1_2: file(relativePath: { eq: "unit3section1_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section1_3: file(relativePath: { eq: "unit3section1_1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const Step1 = () => {
    return (
      <>
        <StyledInstructionalContent>
          <div className="bubble bubble-bottom-left">
            You may ask, why is investment risky? This is because your
            investment value might rise or fall because of market conditions
            (market risk). Higher risk investments like individual stocks depend
            on market fluctuations.{" "}
            <i>
              Based on this picture, what factor do you think helps lower risk
              on high risk investments?
            </i>
          </div>{" "}
          <Img fluid={data.section1_2.childImageSharp.fluid} />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>My thoughts:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>{" "}
        </StyledInstructionalContent>
      </>
    );
  };

  const Step2 = () => {
    return (
      <>
        <StyledInstructionalContent>
          <div className="bubble bubble-bottom-left">
            The factor was <strong>time</strong>! Long-term investments help
            lower risk because markets follow cycles of growth and decline.{" "}
            <strong>
              Starting early reduces the risk of getting caught up in market
              fluctuations.{" "}
            </strong>
            If you look at this graph below, it shows that{" "}
            <strong>
              it may take years for a market to recover from crashes.{" "}
            </strong>
            That said, if are 30 years old when the market crashes, you are more
            likely to make your money back than if you see the crashes when
            you're 60.
          </div>
          <Img fluid={data.section1_3.childImageSharp.fluid} />
          <FigureCaption>
            Source:
            https://fourpillarfreedom.com/heres-how-long-the-stock-market-has-historically-taken-to-recover-from-drops/
          </FigureCaption>
        </StyledInstructionalContent>
      </>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section2"][0] >= 1 && <Step2 />}
      {/* {progress["section1"][0] >= 2 && <Step3 />}
      {progress["section1"][0] >= 3 && <Step4 />}
      {progress["section1"][0] >= 4 && <Step5 />}
      {progress["section1"][0] >= 5 && <Step6 />} */}
    </>
  );
};

export default Unit3Section1;
