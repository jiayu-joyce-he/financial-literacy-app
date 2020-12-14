import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { FormControl, InputGroup, Row, Col } from "react-bootstrap";

const StyledInstructionalContent = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2rem;

  .title {
    margin: auto;
    font-size: 2rem;
  }

  .equation {
    font-size: 1.5rem;
    text-align: center;
  }

  .underline {
    text-decoration: underline;
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
    border-top: 12px solid #d9d9d9;
    border-bottom: 20px solid transparent;
    left: -32px;
  }

  .bubble-bottom-right:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 24px solid #ffe599;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #ffe599;
    border-top: 20px solid transparent;
    right: -20px;
    top: 0px;
  }

  .choices {
    border-color: #ffe599;
    margin-top: 1rem;
    :active {
      background-color: #ffe599 !important;
      border-color: #ffe599 !important;
      color: #434343 !important;
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
  .highlight {
    background: #ffe599;
    background-color: #ffe599;
  }
`;

const OptionalSection1 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        agent2: file(relativePath: { eq: "agent2.png" }) {
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
    const [isPShown, setPIsShown] = useState(false);
    const [isRShown, setRIsShown] = useState(false);
    const [isTShown, setTIsShown] = useState(false);

    return (
      <StyledInstructionalContent>
        <Row>
          <p className="title">Calculating Simple Interest</p>
        </Row>
        <Row>
          <Col>
            <div className="bubble  ">
              <p>
                Suppose you lend $5000 to a friend who agrees to pay a simple
                interest at 3% a year for 10 years.
              </p>
              <p className="equation">
                <strong>
                  Simple Interest ={" "}
                  <span
                    className={isPShown ? "choices highlight" : "choices"}
                    onMouseEnter={() => setPIsShown(true)}
                    onMouseLeave={() => setPIsShown(false)}
                  >
                    P
                  </span>{" "}
                  x{" "}
                  <span
                    className={isRShown ? "choices highlight" : "choices"}
                    onMouseEnter={() => setRIsShown(true)}
                    onMouseLeave={() => setRIsShown(false)}
                  >
                    r
                  </span>{" "}
                  x{" "}
                  <span
                    className={isTShown ? "choices highlight" : "choices"}
                    onMouseEnter={() => setTIsShown(true)}
                    onMouseLeave={() => setTIsShown(false)}
                  >
                    t
                  </span>
                </strong>
              </p>
              <p>where</p>
              <p
                className={isPShown ? "highlight" : ""}
                onMouseEnter={() => setPIsShown(true)}
                onMouseLeave={() => setPIsShown(false)}
              >
                <strong>P</strong> is the <strong>principal</strong>, the
                original amount invested.{" "}
                <span className="underline">
                  In this case P is <i>$5000</i>
                </span>
              </p>
              <p
                className={isRShown ? "highlight" : ""}
                onMouseEnter={() => setRIsShown(true)}
                onMouseLeave={() => setRIsShown(false)}
              >
                <strong>r</strong> is the <strong>annual interest rate</strong>.{" "}
                <span className="underline">
                  In this case r is <i>3% or 0.03</i>
                </span>
              </p>
              <p
                className={isTShown ? "highlight" : ""}
                onMouseEnter={() => setTIsShown(true)}
                onMouseLeave={() => setTIsShown(false)}
              >
                <strong>t</strong> is the{" "}
                <strong>term of the investment in year</strong>.{" "}
                <span className="underline">
                  In this case t is <i>10</i>
                </span>
              </p>
              <p>In this case,</p>
              <p className="equation">
                <strong>
                  Simple Interest ={" "}
                  <span
                    className="choices"
                    onMouseEnter={() => setPIsShown(true)}
                    onMouseLeave={() => setPIsShown(false)}
                  >
                    500
                  </span>{" "}
                  x{" "}
                  <span
                    className="choices"
                    onMouseEnter={() => setRIsShown(true)}
                    onMouseLeave={() => setRIsShown(false)}
                  >
                    0.03
                  </span>{" "}
                  x{" "}
                  <span
                    className="choices"
                    onMouseEnter={() => setTIsShown(true)}
                    onMouseLeave={() => setTIsShown(false)}
                  >
                    10
                  </span>
                  = 1500
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </StyledInstructionalContent>
    );
  };

  const Step2 = () => {
    return (
      <StyledInstructionalContent>
        <Row>
          <Col xl={10} sm={10} md={10}>
            <div className="bubble bubble-bottom-right highlight">
              <p>Let's practice!</p>
            </div>
            <div className="bubble">
              <p>
                Meet Bob, he wants to start a small business. Bob borrows
                $500,000 for three years from his rich uncle, who agrees to
                charge Bob simple interest at 5% annually. How much would Bob
                have to pay in interest charges every year, and what would his
                total interest charges be after three years? (Assume the
                principal amount remains the same throughout the three years,
                i.e., the full loan amount is repaid after three years.)
              </p>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    The principal on the loan is:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>The rate on the loan is:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    The term of the investment is:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
                <InputGroup.Append>
                  <InputGroup.Text>year</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Total interests:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
              </InputGroup>
            </div>
          </Col>
          <Col xl={2} sm={2} md={2}>
            <Img fluid={data.agent2.childImageSharp.fluid} />
          </Col>
        </Row>
      </StyledInstructionalContent>
    );
  };

  const Step3 = () => {
    return (
      <StyledInstructionalContent>
        <Row>
          <Col xl={10} sm={10} md={10}>
            <div className="bubble bubble-bottom-right highlight">
              <p>
                Bob owes his uncle $25,000 in interest after 3 years! Compare my
                answers to yours. Did you get them right?
              </p>
            </div>
            <div className="bubble">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    The principal on the loan is:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl isValid value="500,000" />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>The rate on the loan is:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl isValid value="0.05 or 5%" />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    The term of the investment is:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl isValid value="3" />
                <InputGroup.Append>
                  <InputGroup.Text>year</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Total interests:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl isValid value="25,000" />
              </InputGroup>
            </div>
          </Col>
          <Col xl={2} sm={2} md={2}>
            <Img fluid={data.agent2.childImageSharp.fluid} />
          </Col>
        </Row>
      </StyledInstructionalContent>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section1"][0] >= 1 && <Step2 />}
      {progress["section1"][0] >= 2 && <Step3 />}
    </>
  );
};

export default OptionalSection1;
