import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import {
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

const StyledInstructionalContent = styled.div`
  margin-top: -20rem;
  margin-left: 5rem;
  width: 70%;

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  .row {
    margin-top: 1rem;
  }

  .response {
    font-size: 1.25rem;
    color: #434343;
    border-color: #434343;
    margin: 0.25rem;
    z-index: 1;

    #selected {
      background-color: #ffe599;
    }

    :active {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
    :hover {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
    :focus {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
  }
`;

const StyledWrap = styled.div`
  min-height: 500px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
  font-size: 1.25rem;
  margin-top: 3rem;

  #text {
    margin-top: 10rem;
    font-size: 1.25rem;
  }

  #text-small {
    margin-top: 8.5rem;
    font-size: 1rem;
  }

  .bubble {
    margin-top: 15%;
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

  .btn.active {
    background-color: #ffe599 !important;
    border-color: #434343 !important;
    color: #434343 !important;
  }

  .response {
    font-size: 1.25rem;
    color: #434343;
    border-color: #434343;
    margin: 0.25rem;
    z-index: 1;

    :active {
      background-color: #ffe599
      border-color: #434343;
      color: #434343;
    }
    
    :hover {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
    :focus {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
    :visited {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
  }

  #inflation {
    margin-right: -60%;
    padding-left: 30%;
    margin-top: 1rem;
  }

  .no-top-margin {
    margin-top: 1rem;
  }

  .alert {
    width: 70%;
    margin-top: 1rem;
    min-width: 300px;
    margin-right: 0;
  }
`;

const Unit1Section4 = ({ progress, setProgress, changeSection }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section4_1: file(relativePath: { eq: "unit1section4_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section4_2: file(relativePath: { eq: "unit1section4_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section4_3: file(relativePath: { eq: "unit2section1_3.png" }) {
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

  const [step3Choice, setStep3Choice] = useState(null);
  const [showStep4, setShowStep4] = useState(false);
  const [step4Choice, setStep4Choice] = useState(null);

  const Step1 = () => {
    return (
      <BackgroundImage fluid={data.section4_1.childImageSharp.fluid}>
        <StyledWrap>
          <div id="text">
            <p>
              Isn’t… interest… wonderful? [Pushing hard on the door of the
              vault...] What if… I don’t take advantage of the interest rate?
            </p>
          </div>
          <div className="bubble bubble-bottom-left">okay…?</div>
        </StyledWrap>
      </BackgroundImage>
    );
  };

  console.log("step3choice", step3Choice);

  const Step2 = () => {
    const choices = [
      { choice: "It’s a great idea!", value: 1 },
      { choice: "It may not be the best idea...", value: 2 },
      { choice: "I don’t know.", value: 3 },
    ];

    const handleChange = (val, e) => {
      e.preventDefault();
      setStep3Choice(val);
    };
    return (
      <>
        <BackgroundImage fluid={data.section4_1.childImageSharp.fluid}>
          <StyledWrap>
            <div id="text">
              <p>
                Let’s say I also got $10,000 prize money, and I want to store it
                in my personal vault (as shown on the right) instead of a bank
                that offers me 10% annual interest.
              </p>
              <p>Do you think that is a good idea?</p>
            </div>
            <div className="bubble bubble-bottom-left">
              <ToggleButtonGroup
                type="radio"
                name="options"
                vertical
                onChange={handleChange}
              >
                {choices.map((e, index) => {
                  return (
                    <ToggleButton
                      value={e.value}
                      key={index}
                      variant="outline-primary"
                      className="response"
                      active={index == step3Choice}
                    >
                      {e.choice}
                    </ToggleButton>
                  );
                })}
                {/* <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                <ToggleButton value={2}>Radio 2</ToggleButton>
                <ToggleButton value={3}>Radio 3</ToggleButton> */}
              </ToggleButtonGroup>
            </div>
          </StyledWrap>
        </BackgroundImage>
        {step3Choice && (
          <BackgroundImage fluid={data.section4_1.childImageSharp.fluid}>
            <StyledWrap>
              <div id="text-small">
                {step3Choice === 1 ? (
                  <>
                    <p>
                      Awesome! Then you know know where I’m going with
                      this--inflation!
                    </p>
                    <p>
                      Inflation refers to a general increase in prices and fall
                      in the purchasing value of money. This means that the
                      $10,000 I put away in my safe will allow me to buy less
                      goods in the future given inflation!
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Although it’s a very safe, it may NOT be the best option
                      for me because my $10,000 cash will depreciate in value
                      due to inflation.
                    </p>
                    <p>
                      Inflation refers to a general increase in prices and fall
                      in the purchasing value of money. This means that the
                      $10,000 I put away in my safe will allow me to buy less
                      goods in the future given inflation!
                    </p>
                  </>
                )}
              </div>
              <div className="bubble bubble-bottom-left">
                <Button
                  variant="outline-primary"
                  className="response"
                  onClick={() => setShowStep4(true)}
                >
                  Can you give me an example?
                </Button>
                <Button
                  variant="outline-primary"
                  className="response"
                  onClick={() => {
                    const currentProgress = { ...progress };
                    currentProgress["section4"] = [4, 4];
                    setProgress(currentProgress);
                    changeSection("#section5");
                  }}
                >
                  Right on. I’m familiar with the concept of inflation (skip
                  inflation section)
                </Button>
              </div>
            </StyledWrap>
          </BackgroundImage>
        )}
      </>
    );
  };

  const Step4 = () => {
    const choices = [
      {
        option: "Money",
        feedback:
          "Correct! Inflation changes the value of the money over time, the coffee did not change. This might be because of demand for a product, production costs, or built-in costs like wages. So money that you have now will be worth less in the future.",
        isCorrect: true,
      },
      {
        option: "Coffee",
        feedback:
          "If you take a closer look, you will see that the coffee isn’t changing but the money cost to buy the same coffee increased over time. Inflation changes the value of the money over time, the coffee did not change. This might be because of demand for a product, production costs, or built-in costs like wages. So money that you have now will be worth less in the future.",
        isCorrect: false,
      },
    ];
    return (
      <>
        <BackgroundImage fluid={data.section4_3.childImageSharp.fluid}>
          <StyledWrap>
            <div id="inflation">
              <p>I have a good example here! Take a look at the image below.</p>
              <p> What is changing: the coffee or the money?</p>
            </div>
          </StyledWrap>
        </BackgroundImage>
        <StyledInstructionalContent>
          <Img fluid={data.section4_2.childImageSharp.fluid} />

          <Row>
            <Col xs={3}>
              <div id="multiple-choice">
                {choices.map((e, index) => (
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="response"
                    key={index}
                    onClick={() => {
                      setStep4Choice(index);
                    }}
                  >
                    {e.option}
                  </Button>
                ))}
              </div>
            </Col>
            <Col xs={8}>
              {typeof step4Choice === "number" && (
                <Alert
                  variant={
                    choices[step4Choice].isCorrect ? "success" : "danger"
                  }
                >
                  {choices[step4Choice].feedback}
                </Alert>
              )}
            </Col>
          </Row>
        </StyledInstructionalContent>
      </>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section4"][0] >= 1 && <Step2 />}
      {showStep4 && <Step4 />}
      {/* {progress["section4"][0] >= 1 && <Step5 />} */}
    </>
  );
};

export default Unit1Section4;
