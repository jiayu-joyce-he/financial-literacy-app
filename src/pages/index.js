import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "home.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imageData = data.desktop.childImageSharp.fluid;

  const StyledInnerWrapper = styled.div`
    padding: 10px;
    width: 35%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: left;
    p {
      font-size: 18px;
    }
  `;
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage fluid={imageData}>
        <StyledInnerWrapper>
          <h1>WELCOME!</h1>
          <p>My name is Zoe and I am a financial advisor 🤓</p>
          <p>
            My team and I are passionate about sharing our knowledge and help
            learners like you build <strong>financial literacy</strong>(that is
            the skill and knowledge to allow you to make informed financial
            decisions).
          </p>
          <p>
            Do you like to learn more about <strong>money</strong>? If so, let’s
            get started… because time is money!
          </p>
          <p>
            <Button as={Link} to="/about" variant="primary">
              Get Started
            </Button>
          </p>
        </StyledInnerWrapper>
      </BackgroundImage>
    </Layout>
  );
};

export default IndexPage;
