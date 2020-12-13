import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { Button, Table, Row, Col } from "react-bootstrap";

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

  .bubble-bottom-up:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 24px solid #d9d9d9;
    border-left: 12px solid transparent;
    border-bottom: 12px solid #d9d9d9;
    border-top: 20px solid transparent;
    left: 32px;
    top: -24px;
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
    background-color: #ffe599;
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
      }
    `
  );

  const Step1 = () => {
    return (
      <Row>
        <Col sm={2}>
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
    return (
      <StyledInstructionalContent>
        <div className="bubble">
          <p>
            Anthony has a part time job. Since he lives with his parents, they
            have encouraged him to save half of his earnings, so he saves a
            total of $6,000 in a year. He doesn’t want to pay taxes on this
            money right now, and he doubts that he will need to use the money
            even after 5 years because he will be making more money by then. He
            also doesn’t want to take any risks with his money because he is
            proud of what he earned. Using what you know, help give them advice.
          </p>
        </div>
        <div className="bubble highlight">
          <p>
            Savings accounts, stocks, and bonds are liquid. Retirement accounts
            and real estate are not liquid. Investment accounts can be both.
          </p>{" "}
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>My thoughts:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </div>
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
