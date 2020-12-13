import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { Form, FormControl, Row, Col } from "react-bootstrap";
import Feedback from "react-bootstrap/esm/Feedback";

const StyledInstructionalContent = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2rem;

  .input-group {
    margin-top: 1rem;
  }

  .modal-body {
    text-align: center;
  }

  table {
    margin: 2rem auto;
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
    border-left: ${props =>
      props.isCorrect ? "24px solid #ABE188" : "24px solid #ffe599"};
    border-bottom: ${props =>
      props.isCorrect ? "12px solid #ABE188" : "12px solid #ffe599"};
    // border-left: 24px solid #ffe599;
    border-right: 12px solid transparent;
    // border-bottom: 12px solid #ffe599;
    border-top: 20px solid transparent;
    right: -20px;
    top: 0px;
  }

  .btn.active {
    background-color: #ffe599 !important;
    border-color: #434343 !important;
    color: #434343 !important;
  }

  .center {
    display: flex;
    margin-top: 1rem;
    button {
      margin: auto;
      width: 8rem;
      margin-bottom: 2rem;
    }
  }

  p {
    margin-top: 1rem;
  }

  .row {
    margin-top: 1rem;
  }

  .response {
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

  .highlight {
    background-color: ${props => (props.isCorrect ? "#ABE188" : "#ffe599")};
  }

  #multiple-choice {
    min-width: 200px;
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;

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

const Unit3Section4 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        zoe: file(relativePath: { eq: "zoe.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
    return (
      <Row>
        <Col xl={2} sm={2} md={2}>
          <Img fluid={data.zoe.childImageSharp.fluid} />
        </Col>
        <Col sm={10}>
          <StyledInstructionalContent>
            <div className="bubble bubble-bottom-left">
              <p>Ready to put what you've learned into practice?</p>
              <p>
                Here are some examples from our clients. Do you want to help
                them make the best financial decision given their goals and
                current circumstances?
              </p>
            </div>{" "}
          </StyledInstructionalContent>
        </Col>
      </Row>
    );
  };

  const Step2 = () => {
    const questions1 = [
      {
        question: "What is his time frame?",
        options: [
          {
            value: "Long-term",
            feedback:
              "Correct! Because Anthony doesn’t plan to use the money any time soon, he should be looking at long-term investment options for low risks and good returns. Remember? Compound interest!",
          },
          {
            value: "Short-term",
            feedback:
              "Not quite. Note that Anthony 'doesn’t want to pay taxes on this money right now, and he doubts that he will need to use the money even after 5 years because he will be making more money by then.'",
          },
        ],
        answerIndex: 0,
      },
      {
        question: "Does he need to have liquid assets?",
        options: [
          {
            value: "Yes",
            feedback:
              "Note that Anthony 'doesn’t want to pay taxes on this money right now, and he doubts that he will need to use the money even after 5 years because he will be making more money by then.'",
          },
          {
            value: "No",
            feedback:
              "Correct! As suggested in the passage, Anthony 'doesn’t want to pay taxes on this money right now, and he doubts that he will need to use the money even after 5 years because he will be making more money by then.'",
          },
        ],
        answerIndex: 1,
      },
      {
        question: "What risk tolerance does he have?",
        options: [
          {
            value: "Low",
            feedback:
              "Correct! As suggested, Anthony 'also doesn’t want to take any risks with his money because he is proud of what he earned.'",
          },
          {
            value: "High",
            feedback:
              "Not quite. Note that, Anthony 'also doesn’t want to take any risks with his money because he is proud of what he earned.'",
          },
        ],
        answerIndex: 0,
      },
      {
        question:
          "Out of these asset options, which one would you suggest him to consider?",
        options: [
          {
            value: "Retirement Account such as an IRA",
            feedback:
              "Given Anthony’s goal can be long-term as he won’t need this money while having steady income, it makes sense for him to save it into his retirement account first. It carries low risks, gives good returns and has tax benefits! If you remember if from the video, 'the advantages of saving into an IRA early and often are truly too good to pass up!'",
          },
          {
            value: "Savings Accounts",
            feedback:
              "This is an option, but setting up an retirement account is a better option for Anthony right now. Anthony doesn't need the money to be liquid, and putting the money into an retirement account will give him better returns and tax benefits. If you remember if from the video, 'the advantages of saving into an IRA early and often are truly too good to pass up!'",
          },
          {
            value: "Individual Stocks",
            feedback:
              "Because Anthony doesn't want to risk losing the money and investing in individual stocks is very risky, we wouldn't recommend that to Anthony.",
          },
          {
            value: "Bonds",
            feedback:
              "This is an option, but setting up an retirement account is a better option for Anthony right now. Anthony doesn't need the money to be liquid, and putting the money into an retirement account will give him better returns and tax benefits. If you remember if from the video, 'the advantages of saving into an IRA early and often are truly too good to pass up!'",
          },
        ],
        answerIndex: 0,
      },
    ];

    const [feedback, setFeedback] = useState(
      "Using what you know and information from the passage, answer the following questions!"
    );
    const [isCorrect, setIsCorrect] = useState(false);

    const setChoice = (e, element) => {
      const allOptions = element.options.map(e => e.value);
      const choiceIndex = allOptions.indexOf(e.target.value);
      setIsCorrect(choiceIndex == element.answerIndex);
      setFeedback(element.options[choiceIndex].feedback);
    };
    return (
      <StyledInstructionalContent isCorrect={isCorrect}>
        <div className="bubble">
          <p>
            Anthony is 21 and is attending college and has a part time job. He
            is currently living with his parents, and they have encouraged him
            to save half of his earnings. He has saved $6,000 this year. He
            doesn’t want to pay taxes on this money right now, and he doubts
            that he will need to use the money even after 5 years because he
            will be making more money after he graduate. He also doesn’t want to
            take any risks with his money because he is proud of what he earned.
            He doesn't have any retirement account yet because as a college
            student he just hasn't thought about retirement.
          </p>
        </div>
        <Row>
          <Col xl={10} sm={10} md={10}>
            <div className="bubble bubble-bottom-right highlight">
              <p>{feedback}</p>
            </div>
            <div className="bubble ">
              {questions1.map((element, index) => (
                <Col key={index}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>{element.question}</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      onChange={event => setChoice(event, element)}
                    >
                      {<option key="select">Select:</option>}
                      {element.options.map((option, index) => (
                        <option key={index}>{option.value}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              ))}
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
      {progress["section4"][0] >= 1 && <Step2 />}
      {/* {progress["section4"][0] >= 2 && <Step3 />} */}
      {/* {progress["section4"][0] >= 3 && <Step4 />} */}
    </>
  );
};

export default Unit3Section4;
