import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

const Unit1Section2 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section2_1: file(relativePath: { eq: "unit1section2_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section2_2: file(relativePath: { eq: "unit1section2_2.png" }) {
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
    width: 46%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-left: 43%;
    font-size: 1.25rem;

    #text {
      margin-top: 10rem;
    }

    .input-group {
      padding-top: 20px;
      height: 7rem;
    }
  `;

  const VideoWrap = styled.div`
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input-group {
      height: 5rem;
      margin: 1rem;
      width: 80%;
    }
  `;

  const StyledInstructionalContent = styled.div`
    p {
      font-size: 1.25rem;
      margin-top: 1rem;
      text-align: center;
    }
  `;

  const MultipleChoice = styled.div`
    min-height: 500px;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 25%;
      margin-bottom: 5%;
    }

    #multiple-choice {
      margin-top: 2%;
      margin-left: 30%;
      width: 30%;
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
        margin-top: 20%;
        font-size: 1.25rem;
        color: #434343;
        border-color: #434343;
        margin-top: 1rem;

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
        <Card style={{ width: "70%", margin: "auto" }}>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>Remember that time is money.</p>
              <footer className="blockquote-footer">Benjamin Franklin</footer>
            </blockquote>
          </Card.Body>
        </Card>
        <BackgroundImage fluid={data.section2_1.childImageSharp.fluid}>
          <StyledWrap>
            <div id="text">
              <p>
                Have you ever wondered why do people say that
                <strong>“time is money”</strong>?
              </p>
              <p>
                I’d love to hear you thoughts! Just type your thoughts on the
                next page.
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

  const Step2 = () => {
    return (
      <StyledInstructionalContent>
        <Img fluid={data.section2_2.childImageSharp.fluid} />
      </StyledInstructionalContent>
    );
  };

  const Step3 = () => (
    <VideoWrap className="video">
      <iframe
        src={"https://www.youtube.com/embed/MhvjCWfy-lw?end=91"}
        title={"Time Value"}
        width={"729"}
        height={"409.5"}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="1"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>My Notes:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
    </VideoWrap>
  );

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
            <Col>
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
            <Col>
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
      {progress["section2"][0] >= 1 && <Step2 />}
      {progress["section2"][0] >= 2 && <Step3 />}
      {progress["section2"][0] >= 3 && <Step4 />}
    </>
  );
};

export default Unit1Section2;
