import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { Tab, Col, Row, ListGroup } from "react-bootstrap";

const Unit1Section3 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section3_1: file(relativePath: { eq: "unit1section1_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section3_2: file(relativePath: { eq: "unit1section3_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section3_3: file(relativePath: { eq: "unit1section3_3.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const StyledInnerWrapper = styled.div`
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    #diagnostic-quiz {
      max-width: 600px;
      color: white;
      font-size: 2rem;
      font-variant: petite-caps;
      margin: auto;
      text-align: center;
      text-shadow: 2px 2px 2px #000;
    }

    #interest {
      min-height: 420px;
      font-size: 1.25rem;
      margin: auto;
      width: 75%;
      margin-top: 20%;

      .col {
        margin-top: 28%;
      }
    }
  `;

  const Step1 = () => {
    return (
      <>
        <BackgroundImage fluid={data.section3_1.childImageSharp.fluid}>
          <StyledInnerWrapper>
            <div>
              <p id="diagnostic-quiz">
                Take this quiz to see if if you know the content already!
              </p>

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf-n49-vKoju_kDBFWUG_BvSkM6cycihZGOx-EhyFIgh-EHzw/viewform?embedded=true"
                width="640"
                height="617"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </StyledInnerWrapper>
        </BackgroundImage>
      </>
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
      <BackgroundImage fluid={data.section3_2.childImageSharp.fluid}>
        <StyledInnerWrapper>
          <div id="interest">
            <p>
              Interest is the money you either owe when borrowing or are paid
              when lending money.
            </p>

            <Row>
              <Col>
                <p>
                  Interest on a loan means that you owe more money than what you
                  borrowed.
                </p>
              </Col>
              <Col>
                <p>
                  Interest on investments means that you make more money than
                  what you originally invested.
                </p>
              </Col>
            </Row>
          </div>
        </StyledInnerWrapper>
      </BackgroundImage>
    );
  };

  const Step3 = () => {
    return (
      <StyledInstructionalContent>
        <Img fluid={data.section3_3.childImageSharp.fluid} />
      </StyledInstructionalContent>
    );
  };

  return (
    <>
      {progress["section3"][0] == 0 && <Step1 />}
      {progress["section3"][0] >= 1 && <Step2 />}
      {progress["section3"][0] >= 2 && <Step3 />}
    </>
  );
};

export default Unit1Section3;
