import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";

const AboutPage = () => {
  const StyledInnerWrapper = styled.div`
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <Layout>
      <SEO title="About" />
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
          src="https://docs.google.com/forms/d/e/1FAIpQLScXepiRUSBMW-QtzzezhE_lrYi7pJAJLO2wCvJG7rKPkxf09w/viewform?embedded=true"
          width="700"
          height="520"
          frameBorder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </StyledInnerWrapper>
    </Layout>
  );
};

export default AboutPage;
