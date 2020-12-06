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
      margin-top: 2%;
      position: relative;
      font-size: 1rem;
      background: #d9d9d9;
      border-color: #ffe599;
      border-radius: 1rem;
      padding: 1.25rem;
      padding-bottom: 0;
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

const Unit2Section2 = ({ progress }) => {
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
        section3_2: file(relativePath: { eq: "unit2section3_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section3_3: file(relativePath: { eq: "unit2section3_3.png" }) {
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
            <strong>The most powerful force in the universe?</strong> We sure
            had our doubts before learning about compound interest (even though
            it’s coming from Einstein)! But we’re both so convinced by its power
            that we’re building our careers on it. Let us convince you through
            some examples!
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
              <p>
                Let's use this investment calculator to answer the following
                questions:{" "}
              </p>
              <p>
                With a starting amount of merely <strong>$1,000</strong> and{" "}
                <strong>no </strong>monthly contribution, how much would your
                $1000 become in <strong>50 years</strong> at a{" "}
                <strong>10%</strong> annual return rate (compounded{" "}
                <strong>monthly</strong>)? What if we make it{" "}
                <strong>70 years</strong>?
              </p>
            </div>
          </div>
        </StyledInstructionalContent>
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
          <Col xs={8}>
            <Img fluid={data.section3_2.childImageSharp.fluid} />
          </Col>
          <Col>
            <div id="speechbubble">
              <div className="bubble bubble-bottom-left yellow">
                <p>
                  If you input the numbers correctly like so, you will see that
                  with <strong>$1,000</strong> principal and an rate of return
                  of <strong>10%</strong> compounded monthly for
                  <strong> 50</strong> years, <strong>$1,000</strong> will turn
                  into <strong>$145,370</strong>!
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={8}>
            <Img fluid={data.section3_3.childImageSharp.fluid} />
          </Col>
          <Col>
            <div id="speechbubble">
              <div className="bubble bubble-bottom-left yellow">
                <p>
                  If you make it<strong> 70</strong> years,{" "}
                  <strong>$1,000</strong> will turn into{" "}
                  <strong>over 1 million</strong>! That's <strong>1000X</strong>{" "}
                  of your principal (i.e., original investment). Time really is
                  money with the power of compound interest!
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
      {progress["section2"][0] >= 1 && <Step2 />}
      {progress["section2"][0] >= 2 && <Step3 />}
    </>
  );
};

export default Unit2Section2;
