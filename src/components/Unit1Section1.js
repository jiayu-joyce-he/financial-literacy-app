import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { Button } from "react-bootstrap";

const Unit1Section1 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section1_1: file(relativePath: { eq: "unit1section1_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section1_2: file(relativePath: { eq: "unit1section1_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const section1_1_image = data.section1_1.childImageSharp.fluid;

  const StyledInnerWrapper = styled.div`
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    div {
      margin: auto;
    }
    #multiple-choice {
      width: 55%;
      display: flex;
      flex-direction: column;
      p {
        color: white;
        font-size: 2rem;
        font-variant: petite-caps;
        margin: auto;
        text-align: center;
      }

      .choices {
        font-size: 1.25rem;
        color: #ffe599;
        border-color: #ffe599;
        margin-top: 1rem;
        :active {
          background-color: #ffe599;
          border-color: #ffe599;
          color: black;
        }
        :hover {
          background-color: #ffe599;
          border-color: #ffe599;
          color: black;
        }
        :focus {
          background-color: #ffe599;
          border-color: #ffe599;
          color: black;
        }
      }

      #wrong {
        margin-top: 1rem;
      }
    }
  `;

  const Step1 = () => {
    return (
      <BackgroundImage fluid={section1_1_image}>
        <StyledInnerWrapper>
          <div id="multiple-choice">
            <p>
              Congratulations!!! You have won a cash prize! You have two payment
              options:
            </p>

            <Button variant="outline-primary" size="lg" className="choices">
              A: Receive $10,000 now
            </Button>
            {progress["section1"][0] >= 1 ? (
              <Button variant="secondary" size="lg" id="wrong">
                B: Receive $10,000 over three years.
              </Button>
            ) : (
              <Button
                variant="outline-primary"
                size="lg"
                className="choices"
                id="correct"
              >
                B: Receive $10,000 over three years.
              </Button>
            )}
          </div>
        </StyledInnerWrapper>
      </BackgroundImage>
    );
  };

  const StyledInstructionalContent = styled.div`
    p {
      font-size: 1.25rem;
      margin-top: 1rem;
      text-align: center;
    }
  `;

  const Step2 = () => {
    return (
      <StyledInstructionalContent>
        <p>
          The better choice here is to get the $10,000 <strong>now</strong>,
          because
        </p>
        <Img
          fluid={data.section1_2.childImageSharp.fluid}
          alt="A corgi smiling happily"
        />
      </StyledInstructionalContent>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section1"][0] >= 1 && <Step2 />}
    </>
  );
};

export default Unit1Section1;
