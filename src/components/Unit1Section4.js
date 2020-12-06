import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { Button } from "react-bootstrap";

const StyledWrap = styled.div`
  min-height: 500px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
  font-size: 1.25rem;

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

  #response {
    font-size: 1.25rem;
    color: #434343;
    border-color: #434343;
    margin: 0.25rem;
    z-index: 1;

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

  const Step2 = () => {
    const choices = [
      "It’s a great idea!",
      "It may not be the best idea...",
      "I don’t know.",
    ];
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
              {choices.map((e, index) => (
                <Button
                  variant="outline-primary"
                  id="response"
                  key={index}
                  onClick={() => {
                    console.log("index", index);
                    setStep3Choice(index + 1);
                  }}
                >
                  {e}
                </Button>
              ))}
            </div>
          </StyledWrap>
        </BackgroundImage>
        {step3Choice && (
          <BackgroundImage fluid={data.section4_1.childImageSharp.fluid}>
            <StyledWrap>
              <div id="text-small">
                {step3Choice == 1 ? (
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
                  id="response"
                  onClick={() => setShowStep4(true)}
                >
                  Can you give me an example?
                </Button>
                <Button
                  variant="outline-primary"
                  id="response"
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
    return (
      <BackgroundImage fluid={data.section4_1.childImageSharp.fluid}>
        <StyledWrap>
          <div id="text">
            <p>step 4</p>
          </div>
          <div className="bubble bubble-bottom-left">okay…?</div>
        </StyledWrap>
      </BackgroundImage>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section4"][0] >= 1 && <Step2 />}
      {showStep4 && <Step4 />}
    </>
  );
};

export default Unit1Section4;
