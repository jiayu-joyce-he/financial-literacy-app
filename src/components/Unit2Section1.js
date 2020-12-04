import React, { useState } from "react";
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
        section2_3: file(relativePath: { eq: "unit1section2_3.png" }) {
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
    min-height: 500px;
    min-width: 500px;
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-left: 35%;
    font-size: 1.25rem;

    #text {
      margin-top: 7%;
    }

    .input-group {
      padding-top: 3rem;
      height: 10rem;
    }

    #text-small {
      margin-top: 8.5rem;
      font-size: 1rem;
    }

    .bubble {
      margin-top: 20%;
      position: relative;
      font-size: 1.25rem;
      line-height: 1rem;
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
      border-left: 24px solid #d9d9d9;
      border-right: 12px solid transparent;
      border-top: 12px solid #d9d9d9;
      border-bottom: 20px solid transparent;
      left: 32px;
      bottom: -24px;
    }

    #response {
      display: flex;
      font-size: 1.25rem;
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
    min-height: 500px;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .row {
      margin-top: 3%;
      margin-bottom: 3%;
    }

    p {
      margin-top: 25%;
      margin-bottom: 5%;
    }

    .alert {
      width: 70%;
      margin-top: 1rem;
      min-width: 300px;
    }

    #multiple-choice {
      min-width: 200px;
      margin-left: 40%;
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
        font-size: 1.25rem;
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

  const Step2 = () => {
    const choices = [
      "What is simple interest?",
      "What is compound interest?",
      "I'm familiar with both!",
    ];
    return (
      <BackgroundImage fluid={data.section1_1.childImageSharp.fluid}>
        <StyledWrap>
          <div id="text">
            <p>
              There are mainly two kinds:
              <strong>simple interest</strong> and
              <strong>compound interest</strong>. Have you heard of them before?
            </p>
          </div>
          <div className="bubble bubble-bottom-left">
            {choices.map((e, index) => (
              <Button
                variant="outline-primary"
                id="response"
                key={index}
                onClick={setStep3Choice(index)}
              >
                {e}
              </Button>
            ))}
          </div>
        </StyledWrap>
      </BackgroundImage>
    );
  };

  const Step3 = () => {
    step3Choice == 0 ? (
      <BackgroundImage fluid={data.section1_1.childImageSharp.fluid}>
        <StyledWrap>
          <div id="text-small"></div>
          <div className="bubble bubble-bottom-left">
            <Button
              variant="outline-primary"
              id="response"
              // onClick={() => setShowStep4(true)}
            >
              Can you give me an example?
            </Button>
            <Button
              variant="outline-primary"
              id="response"
              onClick={() => {
                const currentProgress = { ...progress };
                currentProgress["section2"] = [4, 4];
                setProgress(currentProgress);
                navigate("unit1#section3");
              }}
            >
              Right on. I’m familiar with the concept of inflation (skip
              inflation section)
            </Button>
          </div>
        </StyledWrap>
      </BackgroundImage>
    ) : (
      <BackgroundImage fluid={data.section1_1.childImageSharp.fluid}>
        <StyledWrap>
          <div id="text-small"></div>
          <div className="bubble bubble-bottom-left">
            <Button
              variant="outline-primary"
              id="response"
              // onClick={() => setShowStep4(true)}
            >
              Can you give me an example?
            </Button>
            <Button
              variant="outline-primary"
              id="response"
              onClick={() => {
                const currentProgress = { ...progress };
                currentProgress["section2"] = [4, 4];
                setProgress(currentProgress);
                navigate("unit1#section3");
              }}
            >
              Right on. I’m familiar with the concept of inflation (skip
              inflation section)
            </Button>
          </div>
        </StyledWrap>
      </BackgroundImage>
    );
  };

  const [choice, setChoice] = useState(null);

  const Step4 = () => {
    const choices = [
      {
        option: "Cash",
        feedback:
          "Not quite. Cash doesn’t give time value. Think about what may grow your money",
        isCorrect: false,
      },
      {
        option: "Present value",
        feedback:
          "Not quite. Present value is the value of the deposit. It’s does not explain the time value of money. Think about what may grow your money?",
        isCorrect: false,
      },
      {
        option: "Future value",
        feedback:
          "Not quite. Future value is the value of the deposit after the investment period. It’s does not explain the time value of money. Think about what may grow your money?",
        isCorrect: false,
      },
      {
        option: "Interest",
        feedback:
          "🎉 Correct! We say that interest is the time value of money because over time you can earn interest on your money.",
        isCorrect: true,
      },
    ];

    return (
      <BackgroundImage fluid={data.section2_3.childImageSharp.fluid}>
        <MultipleChoice>
          <div id="question">
            <p>
              According to the video, what is known as the time value of money?
            </p>
          </div>
          <Row>
            <Col xs={5}>
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
            <Col xs={7}>
              {typeof choice === "number" && (
                <Alert
                  variant={choices[choice].isCorrect ? "success" : "danger"}
                >
                  {choices[choice].feedback}
                </Alert>
              )}
            </Col>
          </Row>
        </MultipleChoice>
      </BackgroundImage>
    );
  };

  console.log("progress", progress);

  return (
    <>
      <Step1 />
      {progress["section1"][0] >= 1 && <Step2 />}
      {progress["section1"][0] >= 2 && <Step3 />}
      {progress["section1"][0] >= 3 && <Step4 />}
    </>
  );
};

export default Unit2Section1;
