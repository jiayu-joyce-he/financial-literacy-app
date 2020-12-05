import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

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

const StyledInnerWrapper = styled.div`
  min-height: 500px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-left: 45%;
  p {
    margin-top: 3rem;
    font-size: 1.25rem;
  }
`;

const Unit1Section2 = ({ progress }) => {
  const data = useStaticQuery(
    graphql`
      query {
        section3_1: file(relativePath: { eq: "unit2section3_1.png" }) {
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

  const Step2 = () => {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Initial Deposit</Form.Label>
              <Row>
                <Col md={6} sm={8}>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <Button
                        variant="primary"
                        size="sm"
                        data-counter="add"
                        data-field="initial_deposit"
                      >
                        &#8722;
                      </Button>
                    </InputGroup.Prepend>
                    <FormControl
                      className="text-center"
                      id="initial_deposit"
                      type="text"
                      name="initial_deposit"
                      min="100"
                      max="1000000"
                      step="100"
                      value="$5000"
                      data-value="5000"
                      data-prepend="$"
                    />
                    <InputGroup.Append>
                      <InputGroup>
                        <Button
                          variant="primary"
                          size="sm"
                          data-counter="add"
                          data-field="initial_deposit"
                        >
                          &#43;
                        </Button>
                      </InputGroup>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Form.Label for="contribution_amount">Contributions</Form.Label>
              <Row>
                <Col md={6} sm={8}>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <Button
                        variant="primary"
                        size="sm"
                        data-counter="sub"
                        data-field="contribution_amount"
                      >
                        &#8722;
                      </Button>
                    </InputGroup.Prepend>
                    <FormControl
                      className="text-center"
                      id="contribution_amount"
                      type="text"
                      name="contribution_amount"
                      min="0"
                      max="10000"
                      step="50"
                      value="$100"
                      data-value="100"
                      data-prepend="$"
                    />
                    <InputGroup.Append>
                      <InputGroup>
                        <Button
                          variant="primary"
                          size="sm"
                          data-counter="add"
                          data-field="contribution_amount"
                        >
                          &#43;
                        </Button>
                      </InputGroup>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
              <Form.Check
                inline
                id="contribution_period_monthly"
                type="radio"
                name="contribution_period"
                value="12"
                checked
                label="monthly"
              />
              <Form.Check
                inline
                id="contribution_period_annually"
                type="radio"
                name="contribution_period"
                value="1"
                label="annually"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label for="investment_timespan">
                Investment Time Span
              </Form.Label>
              <Row>
                <Col md={6} sm={8}>
                  <Form.Control
                    id="investment_timespan"
                    type="range"
                    name="investment_timespan"
                    min="2"
                    max="50"
                    step="1"
                    value="5"
                  />
                </Col>
              </Row>
              <span id="investment_timespan_text">5 years</span>
            </Form.Group>

            <Form.Group>
              <Form.Label for="estimated_return">
                Estimated Rate of Return
              </Form.Label>
              <Row>
                <Col md={6} sm={8}>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <Button
                        variant="primary"
                        size="sm"
                        data-counter="sub"
                        data-field="estimated_return"
                      >
                        &minus;
                      </Button>
                    </InputGroup.Prepend>
                    <FormControl
                      className="text-center"
                      id="estimated_return"
                      type="text"
                      name="estimated_return"
                      min="0"
                      max="50"
                      step="0.25"
                      value="5.00%"
                      data-value="5.00"
                      data-append="%"
                    />
                    <InputGroup.Append>
                      <Button
                        variant="primary"
                        size="sm"
                        data-counter="add"
                        data-field="estimated_return"
                      >
                        &#43;
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={12}>
                <div>Compound Frequency</div>
                <Form.Check
                  inline
                  id="compound_period_daily"
                  name="compound_period"
                  type="radio"
                  value="365"
                  label="daily"
                ></Form.Check>
                <Form.Check
                  inline
                  id="compound_period_monthly"
                  name="compound_period"
                  type="radio"
                  value="12"
                  checked
                  label="monthly"
                ></Form.Check>
                <Form.Check
                  inline
                  id="compound_period_annually"
                  name="compound_period"
                  type="radio"
                  value="1"
                  label="annually"
                ></Form.Check>
              </Col>
            </Form.Group>
          </Col>
          <Col md={6} className="text-center">
            <div>Future Balance</div>
            <h3 id="future_balance">?</h3>
            <canvas id="myChart"></canvas>
          </Col>
        </Row>
      </Container>
    );
  };

  const [choice, setChoice] = useState(null);

  const Step1 = () => {
    return (
      <BackgroundImage fluid={data.section3_1.childImageSharp.fluid}>
        <StyledInnerWrapper>
          <p>
            <strong>The most powerful force in the universe?</strong> We sure
            had our doubts before learning about compound interest (even though
            it’s coming from Einstein)! But we’re both so convinced by its power
            that we’re building our careers on it. Let us convince you through
            some examples!
          </p>
        </StyledInnerWrapper>
      </BackgroundImage>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section2"][0] >= 1 && <Step2 />}
      {/* {progress["section2"][0] >= 2 && <Step3 />} */}
      {/* {progress["section2"][0] >= 3 && <Step4 />} */}
    </>
  );
};

export default Unit1Section2;
