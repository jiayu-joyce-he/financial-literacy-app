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
      margin-top: 10%;
    }

    .input-group {
      padding-top: 3rem;
      height: 10rem;
    }

    #text-small {
      margin-top: 6%;
      font-size: 1rem;
    }

    .bubble {
      margin-top: 13%;
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
      // font-size: 1.25rem;
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
              There are mainly two kinds: <strong> simple interest</strong> and
              <strong>compound interest</strong>. Did you include them in your
              response?
            </p>
            <p>If not, have you heard of them before?</p>
          </div>
          <div className="bubble bubble-bottom-left">
            {choices.map((e, index) => (
              <Button
                variant="outline-primary"
                id="response"
                key={index}
                onClick={() => setStep3Choice(index)}
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
    // step3Choice == 3 && navigate("unit2#section3");
    if (step3Choice == 3) {
      const currentProgress = { ...progress };
      currentProgress["section2"] = [4, 4];
      setProgress(currentProgress);
    }

    return step3Choice == 1 ? (
      <BackgroundImage fluid={data.section1_2.childImageSharp.fluid}>
        <StyledWrap>
          <div id="text-small">
            <p>
              Compound interest is when accrued interest is added to the
              principle balance.
            </p>
            <p>
              <strong>It is interest on interest.</strong>
            </p>
            {showExample && (
              <p>
                Compound interest can be on loans and investments. For example,
                savings account uses compound interest.
              </p>
            )}
          </div>
          <div className="bubble bubble-bottom-left">
            {!showExample && (
              <Button
                variant="outline-primary"
                id="response"
                onClick={() => setShowExample(true)}
              >
                Can you give me an example?
              </Button>
            )}
            <Button
              variant="outline-primary"
              id="response"
              onClick={() => setStep3Choice(1)}
            >
              What is simple interest?
            </Button>
            <Button
              variant="outline-primary"
              id="response"
              onClick={() => {
                const currentProgress = { ...progress };
                currentProgress["section2"] = [4, 4];
                setProgress(currentProgress);
                // navigate("unit2#section3");
              }}
            >
              Right on. I’m familiar with the concept of inflation (skip
              inflation section)
            </Button>
          </div>
        </StyledWrap>
      </BackgroundImage>
    ) : (
      <BackgroundImage fluid={data.section1_2.childImageSharp.fluid}>
        <StyledWrap>
          <div id="text-small">
            <p>
              Simple interest is calculated as a percentage of a deposit or
              loan’s principal balance.{" "}
            </p>
            <p>
              No matter how long a borrower goes without paying a debt or an
              account holder keeps money in the bank, interest will still be
              calculated from the original amount.
            </p>
            {showExample && (
              <p>
                For example, certain types of loans such as mortgage and
                students loans use simple interest.
              </p>
            )}
          </div>
          <div className="bubble bubble-bottom-left">
            {!showExample && (
              <Button
                variant="outline-primary"
                id="response"
                onClick={() => setShowExample(true)}
              >
                Can you give me an example?
              </Button>
            )}
            <Button
              variant="outline-primary"
              id="response"
              onClick={() => setStep3Choice(0)}
            >
              What is compound interest?
            </Button>
            <Button
              variant="outline-primary"
              id="response"
              onClick={() => {
                const currentProgress = { ...progress };
                currentProgress["section2"] = [4, 4];
                setProgress(currentProgress);
                // navigate("unit2#section3");
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
        option: "What is simple interest?",
        feedback:
          "Simple interest is calculated as a percentage of a deposit or loan’s principal balance. No matter how long a borrower goes without paying a debt or an account holder keeps money in the bank, interest will still be calculated from the original amount. Certain types of loans such as mortgage and students loans use simple interest.",
      },
      {
        option: "What is compound interest?",
        feedback:
          "Compound interest is when accrued interest is added to the principle balance. It is interest on interest. Compound interest can be on loans and investments. For example, savings account uses compound interest.",
      },
      {
        option: "I'm familiar with both!",
        feedback:
          "Awesome! Feel free to skip ahead to the next section if you want to.",
      },
    ];

    return (
      <BackgroundImage fluid={data.section1_3.childImageSharp.fluid}>
        <MultipleChoice>
          <div id="question">
            <p>
              There are mainly two kinds: <strong>simple interest</strong> and{" "}
              <strong>compound interest</strong>. Have you heard of them before?
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
            <Col xs={8}>
              {typeof choice === "number" && (
                <Alert variant="info">{choices[choice].feedback}</Alert>
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
      {/* {progress["section1"][0] >= 1 && <Step2 />} */}
      {/* {progress["section1"][0] >= 2 && <Step3 />} */}
      {progress["section1"][0] >= 2 && <Step4 />}
    </>
  );
};

export default Unit2Section1;
