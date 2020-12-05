import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import {
  InputGroup,
  FormControl,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

const Unit2Section1 = ({ progress, setProgress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section1_1: file(relativePath: { eq: "unit2section1_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section1_2: file(relativePath: { eq: "unit2section1_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section1_3: file(relativePath: { eq: "unit2section1_3.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section1_4: file(relativePath: { eq: "unit2section1_4.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const StyledWrap = styled.div`
    min-height: 520px;
    min-width: 500px;
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-left: 35%;
    font-size: 1.25rem;

    #text {
      margin-top: 8%;
    }

    .input-group {
      padding-top: 3rem;
      height: 10rem;
    }

    #text-small {
      margin-top: 6%;
      font-size: 1rem;
    }

    #response {
      display: flex;
      color: #434343;
      border-color: #434343;
      margin: 0.5rem;
      z-index: 1;

      :active {
        background-color: #ffe599;
        border-color: #434343;
        color: 434343;
      }
      :hover {
        background-color: #ffe599;
        border-color: #434343;
        color: 434343;
      }
      :focus {
        background-color: #ffe599;
        border-color: #434343;
        color: 434343;
      }
    }
  `;

  const MultipleChoice = styled.div`
    min-height: 600px;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .row {
      margin-top: 3%;
      margin-bottom: 3%;
    }

    p {
      width: 60%;
      margin: 5% auto auto 15%;
      margin-top: 5%;
    }

    .alert {
      width: 70%;
      margin-top: 1rem;
      min-width: 300px;
    }

    #multiple-choice {
      min-width: 200px;
      margin-left: 30%;
      width: 50%;
      display: flex;
      flex-direction: column;
      text-align: start;

      p {
        color: white;
        font-size: 2rem;
        font-variant: petite-caps;
        margin: auto;
      }

      .choices {
        font-size: 1rem;
        color: #434343;
        border-color: #434343;
        margin-top: 1rem;
        z-index: 1;

        :active {
          background-color: #ffe599;
          border-color: #434343;
          color: 434343;
        }
        :hover {
          background-color: #ffe599;
          border-color: #434343;
          color: 434343;
        }
        :focus {
          background-color: #ffe599;
          border-color: #434343;
          color: 434343;
        }
      }
    }
  `;

  const StyledInstructionalContent = styled.div`
    max-height: 500px;
    width: 80%;
    margin: auto;
    margin-top: -10%;
    margin-bottom: 15%;

    #speechbubble {
      min-height: 100px;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 5%;
      font-size: 1.25rem;

      .bubble {
        margin-top: 2%;
        position: relative;
        font-size: 1.25rem;
        background: #d9d9d9;
        border-color: #ffe599;
        border-radius: 1rem;
        padding: 1rem;
        text-align: center;
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
        right: 10px;
        top: -20px;
      }
    }
  `;

  const Step1 = () => {
    return (
      <>
        <BackgroundImage fluid={data.section1_1.childImageSharp.fluid}>
          <StyledWrap>
            <div id="text">
              <p>
                Welcome back! Are you ready to learn more about interest, the
                tool that will help your money grow with time?
              </p>
              <p>
                My first question is, do you know that there are two types of
                interests? If you do, what are they?
              </p>
            </div>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>My thoughts:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
          </StyledWrap>
        </BackgroundImage>
      </>
    );
  };

  const [step3Choice, setStep3Choice] = useState(0);
  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    setShowExample(false);
  }, [step3Choice]);

  const [choice, setChoice] = useState(null);

  const Step3 = () => {
    const choices = [
      {
        option: "What is simple interest?",
      },
      {
        option: "What is compound interest?",
      },
      {
        option: "I'm familiar with both!",
      },
    ];

    const ChoiceResponse = () => {
      if (choice == 0) {
        return (
          <Alert variant="info">
            Simple interest is calculated as a percentage of a deposit or loan’s
            principal balance. No matter how long a borrower goes without paying
            a debt or an account holder keeps money in the bank,{" "}
            <strong>
              interest will still be calculated from the original amount
            </strong>
            . Certain types of loans such as mortgage and students loans use
            simple interest.
          </Alert>
        );
      } else if (choice == 1) {
        return (
          <Alert variant="info">
            Compound interest is when accrued interest is added to the principle
            balance. <strong>It is interest on interest.</strong>
          </Alert>
        );
      } else if (choice == 2) {
        return (
          <Alert variant="info">
            Awesome! Feel free to skip ahead to{" "}
            <Alert.Link href="unit2#section2">the next section</Alert.Link>! if
            you want to.
          </Alert>
        );
      }
    };

    return (
      <BackgroundImage fluid={data.section1_3.childImageSharp.fluid}>
        <MultipleChoice>
          <div id="question">
            <p>
              There are mainly two kinds: <strong>simple interest</strong> and{" "}
              <strong>compound interest</strong>. Did you include them in your
              response? If not, have you heard of them before?
            </p>
          </div>
          <Row>
            <Col xs={4}>
              <div id="multiple-choice">
                {choices.map((e, index) => (
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="choices"
                    key={index}
                    onClick={() => {
                      setChoice(index);
                    }}
                  >
                    {e.option}
                  </Button>
                ))}
              </div>
            </Col>
            <Col xs={8}>{typeof choice === "number" && <ChoiceResponse />}</Col>
          </Row>
        </MultipleChoice>
      </BackgroundImage>
    );
  };

  const Step4 = () => {
    return (
      <StyledInstructionalContent>
        <div id="speechbubble">
          <div className="bubble bubble-bottom-left">
            Now we know what simple interest and compound interest are, you may
            wonder why do they matter? The truth is, it matters a lot! In fact,
            compound interest matters so much that Einstein famously said the
            following about it:
          </div>
        </div>
        <Img
          fluid={data.section1_4.childImageSharp.fluid}
          alt="A corgi smiling happily"
        />
      </StyledInstructionalContent>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section1"][0] >= 1 && <Step3 />}
      {progress["section1"][0] >= 2 && <Step4 />}
    </>
  );
};

export default Unit2Section1;
