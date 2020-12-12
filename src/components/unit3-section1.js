import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { Button, Table, FormControl, InputGroup } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

const StyledInstructionalContent = styled.div`
  width: 80%;
  margin: auto;

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
`;

const StyledWrap = styled.div`
  min-height: 500px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3%;
  margin-top: 3rem;

  .input-group {
    margin-top: 2rem;
  }

  #text {
    padding: 1rem;
    margin-top: 6rem;
  }

  #text-small {
    margin-top: 8.5rem;
  }
`;

const Unit3Section1 = ({ progress, setProgress, changeSection }) => {
  const data = useStaticQuery(
    graphql`
      query {
        unit1section4_1: file(relativePath: { eq: "unit1section4_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section1_1: file(relativePath: { eq: "unit3section1_1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section1_2: file(relativePath: { eq: "unit3section1_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section1_3: file(relativePath: { eq: "unit3section1_3.png" }) {
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
      }
    `
  );

  const Step1 = () => {
    return (
      <BackgroundImage fluid={data.unit1section4_1.childImageSharp.fluid}>
        <StyledWrap>
          <div id="text">
            <p>
              Once you have some money you will want to save it. As we learned
              earlier, if you keep it as cash it will lose value due to
              inflation.
            </p>
            <p>
              Before we can talk about where to save money, we need to assess
              the goal of saving. So what measures do we use to assess our
              goals?
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
    );
  };

  const Step2 = () => {
    return (
      <>
        <StyledInstructionalContent>
          <div className="bubble bubble-bottom-left">
            If you don’t know, that ok! Let’s start with answering this
            question. If your goal is to make a lot of money, would you choose
            investments with low risk or with high risk?
          </div>
          <Img fluid={data.section1_1.childImageSharp.fluid} />
          <div className="center">
            <Button variant="outline-primary" size="lg" className="response">
              Low risk
            </Button>
            <Button variant="outline-primary" size="lg" className="response">
              High risk
            </Button>
          </div>
        </StyledInstructionalContent>
      </>
    );
  };

  const Step3 = () => {
    return (
      <>
        <StyledInstructionalContent>
          <div className="bubble bubble-bottom-left">
            <p>Are you sure? Let's test it out.</p>

            <p>
              Look at the following three examples, which one do you think have
              higher return?
            </p>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Returns</th>
                <th>Year 1</th>
                <th>Year 2</th>
                <th>Year 3</th>
                <th>Year 4</th>
                <th>Year 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>B</td>
                <td>+3%</td>
                <td>+3%</td>
                <td>+3%</td>
                <td>+3%</td>
                <td>+3%</td>
              </tr>
              <tr>
                <td>C</td>
                <td>+10%</td>
                <td>-10%</td>
                <td>+15%</td>
                <td>-5%</td>
                <td>+3%</td>
              </tr>
            </tbody>
          </Table>
          <div className="center">
            <Button variant="outline-primary" size="lg" className="response">
              A
            </Button>
            <Button variant="outline-primary" size="lg" className="response">
              B
            </Button>
          </div>
        </StyledInstructionalContent>
      </>
    );
  };

  const Step4 = () => {
    return (
      <>
        <StyledInstructionalContent>
          <div className="bubble bubble-bottom-left">
            <p>
              The answer is... it depends! It is generally true that higher risk
              comes with higher rewards, but you can make a lot of money in
              long-term with a steady return (even if it’s lower than what you’d
              get from risky investment).
            </p>

            <p>
              Example A would be like <strong>cash</strong>, there is no chance
              of gaining value, but value will be lost to inflation. Example B
              could be like a <strong>bond</strong>. There is gradual growth
              over time with very little risk but no losses. And Example C could
              be like investing <strong>stocks</strong> on the stock market,
              very risky with high gains and losses over time.
            </p>
            <p>
              Even though stock markets gives higher returns, it is not
              guaranteed that you will make more money over time. In this
              example, bond outperformed the stock investment!
            </p>
            <p>
              However, it doesn't mean that bonds are better than stocks! The
              key lesson here is that{" "}
              <strong>
                steady low returns is not necessarily worse than high risk and
                high return investments
              </strong>
              . If you are able to generate steady returns from the stock market
              without taking too many losses, then you'll be making a lot of
              money!
            </p>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Returns</th>
                <th>Year 1</th>
                <th>Year 2</th>
                <th>Year 3</th>
                <th>Year 4</th>
                <th>Year 5</th>
                <th className="highlight">Overall</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td className="highlight">0</td>
              </tr>
              <tr>
                <td>B</td>
                <td>+3%</td>
                <td>+3%</td>
                <td>+3%</td>
                <td>+3%</td>
                <td>+3%</td>
                <td className="highlight">+15.93%</td>
              </tr>
              <tr>
                <td>C</td>
                <td>+10%</td>
                <td>-10%</td>
                <td>+15%</td>
                <td>-5%</td>
                <td>+3%</td>
                <td className="highlight">+11.4%</td>
              </tr>
            </tbody>
          </Table>
        </StyledInstructionalContent>
      </>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section1"][0] >= 1 && <Step2 />}
      {progress["section1"][0] >= 2 && <Step3 />}
      {progress["section1"][0] >= 3 && <Step4 />}
    </>
  );
};

export default Unit3Section1;
