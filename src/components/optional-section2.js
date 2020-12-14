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

const OptionalSection2 = ({ progress }) => {
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
    const [isNShown, setNIsShown] = useState(false);
    const [isTShown, setTIsShown] = useState(false);

    return (
      <StyledInstructionalContent>
        <Row>
          <p className="title">Calculating Compound Interest</p>
        </Row>
        <Row>
          <Col>
            <div className="bubble  ">
              <p>
                Pretend you put $5,000 into a savings account with an annual
                interest of 3% compounded annually. What is the interest you
                would earn in 10 years?
              </p>
              <p className="equation">
                <strong>
                  Compound Interest ={" "}
                  <span
                    className={isPShown ? "highlight" : ""}
                    onMouseEnter={() => setPIsShown(true)}
                    onMouseLeave={() => setPIsShown(false)}
                  >
                    P
                  </span>{" "}
                  x (1+
                  <span
                    className={isRShown ? "highlight" : ""}
                    onMouseEnter={() => setRIsShown(true)}
                    onMouseLeave={() => setRIsShown(false)}
                  >
                    r
                  </span>{" "}
                  /
                  <span
                    className={isNShown ? "highlight" : ""}
                    onMouseEnter={() => setNIsShown(true)}
                    onMouseLeave={() => setNIsShown(false)}
                  >
                    n
                  </span>
                  )^(
                  <span
                    className={isNShown ? "highlight" : ""}
                    onMouseEnter={() => setNIsShown(true)}
                    onMouseLeave={() => setNIsShown(false)}
                  >
                    n
                  </span>
                  <span
                    className={isTShown ? "highlight" : ""}
                    onMouseEnter={() => setTIsShown(true)}
                    onMouseLeave={() => setTIsShown(false)}
                  >
                    t
                  </span>
                  ) -{" "}
                  <span
                    className={isPShown ? "highlight" : ""}
                    onMouseEnter={() => setPIsShown(true)}
                    onMouseLeave={() => setPIsShown(false)}
                  >
                    P
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
                className={isNShown ? "highlight" : ""}
                onMouseEnter={() => setNIsShown(true)}
                onMouseLeave={() => setNIsShown(false)}
              >
                <strong>n</strong> is the{" "}
                <strong>
                  number of times interest is applied per time period
                </strong>
                .{" "}
                <span className="underline">
                  In this case n is <i>1</i> because it this account compounds{" "}
                  <i>annually</i>
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
                  Compound Interest ={" "}
                  <span
                    className={isPShown ? "highlight" : ""}
                    onMouseEnter={() => setPIsShown(true)}
                    onMouseLeave={() => setPIsShown(false)}
                  >
                    5000
                  </span>{" "}
                  x (1+
                  <span
                    className={isRShown ? "highlight" : ""}
                    onMouseEnter={() => setRIsShown(true)}
                    onMouseLeave={() => setRIsShown(false)}
                  >
                    0.03
                  </span>{" "}
                  /
                  <span
                    className={isNShown ? "highlight" : ""}
                    onMouseEnter={() => setNIsShown(true)}
                    onMouseLeave={() => setNIsShown(false)}
                  >
                    1
                  </span>
                  )^(
                  <span
                    className={isNShown ? "highlight" : ""}
                    onMouseEnter={() => setNIsShown(true)}
                    onMouseLeave={() => setNIsShown(false)}
                  >
                    1
                  </span>
                  x
                  <span
                    className={isTShown ? "highlight" : ""}
                    onMouseEnter={() => setTIsShown(true)}
                    onMouseLeave={() => setTIsShown(false)}
                  >
                    10
                  </span>
                  ) -{" "}
                  <span
                    className={isPShown ? "highlight" : ""}
                    onMouseEnter={() => setPIsShown(true)}
                    onMouseLeave={() => setPIsShown(false)}
                  >
                    5000{" "}
                  </span>
                  = 1,719.58
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
              <p>
                Compound interest is great if you are saving money, because you
                make interest on your interest. But what do you think happens if
                you have compound interest on a loan?
              </p>
            </div>
            <div className="bubble">
              <p>
                Let’s check in with Bob again, his business isn’t doing well.
                Bob needs to borrow an additional $500,000 for three years.
                Unfortunately, his rich uncle is tapped out. So, he takes a loan
                from the bank at an interest rate of 5% per year compounded
                annually, with the full loan amount and interest payable after
                three years. What would be the total interest paid by Bob?
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
                    The compounding frequency is:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
                <InputGroup.Append>
                  <InputGroup.Text>per year</InputGroup.Text>
                </InputGroup.Append>
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
                Bob owes the bank <strong>$578,812.50</strong> in total, meaning
                he will have to pay <strong>$78,812.50</strong> of interest!
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
                    The compounding frequency is:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl isValid value="3" />
                <InputGroup.Append>
                  <InputGroup.Text>per year</InputGroup.Text>
                </InputGroup.Append>
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

  const Step4 = () => {
    return (
      <StyledInstructionalContent>
        <Row>
          <Col xl={10} sm={10} md={10}>
            <div className="bubble bubble-bottom-right highlight">
              <p>
                Wow! This is considerably more than the $25,000 from our last
                example using simple interest. Bob owed more than{" "}
                <strong>$50,000</strong> more when he borrowed a loan with
                <i> compound interest</i> compared to with{" "}
                <i>simple interest</i>!
              </p>
              <p>
                Note that <strong>credit cards</strong> often use
                <strong> compound interest</strong> and compound{" "}
                <strong>daily</strong>! That is why I try to pay off my credit
                cards as fast as possible and do not spend money that I don’t
                have yet to avoid interests compounding.
              </p>
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
      {progress["section2"][0] >= 1 && <Step2 />}
      {progress["section2"][0] >= 2 && <Step3 />}
      {progress["section2"][0] >= 3 && <Step4 />}
    </>
  );
};

export default OptionalSection2;
