import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { Row, Col } from "react-bootstrap";

const StyledInnerWrapper = styled.div`
  min-height: 500px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25%;
  #paragraph {
    margin-top: 3rem;
  }
`;

const CalculatorQuizWrapper = styled.div`
  margin: 2rem 0;
`;

const Unit1Section2 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section4_4: file(relativePath: { eq: "unit2section4_4.png" }) {
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
        <BackgroundImage fluid={data.section4_4.childImageSharp.fluid}>
          <StyledInnerWrapper>
            <div id="paragraph">
              <p>
                Great job finishing the first two modules! Isn’t interest
                interesting? Now that you know the concept of interest, the two
                types of interest, I think you’re ready to try more practice
                problems on calculating interests!{" "}
              </p>
              <p>
                As financial advisors,{" "}
                <strong>
                  we often just take advantage of online calculators instead of
                  calculating interests by hand{" "}
                </strong>
                . So let’s first practice doing problems with the same
                calculator we used earlier!
              </p>
              <p>
                In case you’re interested, we can show you how to calculate
                interests by hand in the next section.{" "}
              </p>
              <p>Are you ready for some practice? Let's do it!</p>
            </div>
          </StyledInnerWrapper>
        </BackgroundImage>

        <CalculatorQuizWrapper>
          <Row>
            <Col sm={4}>
              <iframe
                height="570"
                style={{ width: "100%" }}
                scrolling="no"
                title="Compound Interest Calculator"
                src="https://codepen.io/jiayu-joyce-he/embed/PoGNPmR?height=570&theme-id=dark&default-tab=result"
                frameborder="no"
                loading="lazy"
                allowtransparency="true"
                allowfullscreen="true"
              >
                See the Pen{" "}
                <a href="https://codepen.io/jiayu-joyce-he/pen/PoGNPmR">
                  Compound Interest Calculator
                </a>{" "}
                by Joyce He (
                <a href="https://codepen.io/jiayu-joyce-he">@jiayu-joyce-he</a>)
                on <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </Col>
            <Col sm={8}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScwCnULQLtmoYJEqCeIotTL6w-6Rve6GzouKHEKRfZY6Mcg4w/viewform?embedded=true"
                width="640"
                height="570"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </Col>
          </Row>
        </CalculatorQuizWrapper>
      </>
    );
  };

  const Step2 = () => {
    return <></>;
  };

  return (
    <>
      <Step1 />
      {progress["section2"][0] >= 1 && <Step2 />}
    </>
  );
};

export default Unit1Section2;
