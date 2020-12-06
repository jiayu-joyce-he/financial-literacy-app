import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { Row, Col } from "react-bootstrap";

const StyledInstructionalContent = styled.div`
  // max-height: 500px;
  width: 80%;
  margin: auto;

  .col-8 {
    max-width: ${props => props.maxWidth || 500}px;
    margin-top: 2rem;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.15));
    :hover {
      transform: scale(1.2);
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
      cursor: pointer;
    }
  }
  img {
    width: 100%;
    border-radius: 15px;
  }

  #speechbubble {
    min-height: 100px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    font-size: 1.25rem;

    .bubble {
      margin-top: 1%;
      position: relative;
      font-size: 1rem;
      background: #d9d9d9;
      border-color: #ffe599;
      border-radius: 1rem;
      padding: 1.25rem;
      color: #000;
    }

    .bubble-bottom-left:before {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-right: 12px solid #d9d9d9;
      border-left: 12px solid transparent;
      border-bottom: 12px solid #d9d9d9;
      border-top: 20px solid transparent;
      left: 10px;
      top: -20px;
    }

    .yellow {
      margin-top: 3rem;
      background: #ffe599;
      :before {
        border-right: 12px solid #ffe599;
        border-bottom: 12px solid #ffe599;
      }
    }
  }
`;

const StyledInnerWrapper = styled.div`
  min-height: 500px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-left: 45%;
  p {
    margin-top: 3rem;
    font-size: 1.25rem;
  }
`;

const Unit2Section3 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section3_1: file(relativePath: { eq: "unit2section3_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section4_1: file(relativePath: { eq: "unit2section4_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section4_2: file(relativePath: { eq: "unit2section4_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section4_3: file(relativePath: { eq: "unit2section4_3.png" }) {
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
      <BackgroundImage fluid={data.section3_1.childImageSharp.fluid}>
        <StyledInnerWrapper>
          <p>
            Do you still think <strong>compound interest</strong> and{" "}
            <strong>time value </strong>are overrated? Let’s look at one two
            more examples side-by-side!
          </p>
        </StyledInnerWrapper>
      </BackgroundImage>
    );
  };

  const Step2 = () => {
    return (
      <>
        <StyledInstructionalContent>
          <div id="speechbubble">
            <div className="bubble bubble-bottom-left">
              Let’s compare my plan with Jake’s plan. Who do you think is going
              to save more money at the age of <strong>65</strong>, given both
              of our investments yield an annual rate of return of{" "}
              <strong>7%</strong> and compound annually?
              <i>
                {" "}
                Don’t forget you can use the calculator below to help you
                decide.{" "}
              </i>
            </div>
          </div>
        </StyledInstructionalContent>
        <Img fluid={data.section4_1.childImageSharp.fluid} />

        <iframe
          height="570"
          style={{ width: "100%" }}
          scrolling="no"
          title="Compound Interest Calculator"
          src="https://codepen.io/jiayu-joyce-he/embed/PoGNPmR?height=570&theme-id=dark&default-tab=result"
          frameBorder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen{" "}
          <a href="https://codepen.io/jiayu-joyce-he/pen/PoGNPmR">
            Compound Interest Calculator
          </a>{" "}
          by Joyce He (
          <a href="https://codepen.io/jiayu-joyce-he">@jiayu-joyce-he</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </>
    );
  };

  const Step3 = () => {
    return (
      <StyledInstructionalContent>
        <Row>
          <Col>
            <Col xs={8}>
              <Img fluid={data.section4_2.childImageSharp.fluid} />
            </Col>
            <Col xs={8}>
              <Img fluid={data.section4_3.childImageSharp.fluid} />
            </Col>
          </Col>

          <Col>
            <div id="speechbubble">
              <div className="bubble bubble-bottom-left yellow">
                <p>
                  See it for yourself how much difference{" "}
                  <strong>a decade</strong> makes! Despite Jake would be
                  investing <strong>twice</strong> as much for 30 years, I will
                  end up having more than Jake would have at the age of 65!
                </p>
                <p>
                  Specifically, my principal will be <strong>$101,000 </strong>
                  and Jake's will be <strong>$154,000</strong>. He would have
                  invested $53,000 more than I did, but I would have earned
                  <strong> $20,000</strong> more! This is all because I started
                  early and would have earned{" "}
                  <strong>way more interests</strong>!
                </p>
                <p>
                  Don’t worry! Jake has changed his plan now and started
                  investing.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </StyledInstructionalContent>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section3"][0] >= 1 && <Step2 />}
      {progress["section3"][0] >= 2 && <Step3 />}
    </>
  );
};

export default Unit2Section3;
