import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";

const StyledInnerWrapper = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PreQuizPage = () => {
  return (
    <Layout>
      <SEO title="Pre-quiz" />
      <StyledInnerWrapper>
        <h1>Pre-quiz</h1>
        <p>
          Before we start, can you help us know you better through this quiz?
          Thanks!
        </p>
        <Button variant="outline-success" as={Link} to="/course-outline">
          Have you completed the quiz? Yes
        </Button>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfefqhalq5HQiRLcHfCoCN7zMBhwz_-IsS4m4hdemxplFIzXQ/viewform?embedded=true"
          width="700"
          height="520"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="pre-quiz"
        >
          Loading…
        </iframe>
      </StyledInnerWrapper>
    </Layout>
  );
};

export default PreQuizPage;
