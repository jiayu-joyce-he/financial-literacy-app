import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import UnitButton from "../components/unit-button";

const Overview = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "course-outline-empty.png" }) {
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
    min-height: 500px;
    width: 100%;
    margin-top: 3%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items: left;
    p {
      font-size: 24px;
    }
  `;
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage fluid={imageData}>
        <StyledInnerWrapper>
          <p>
            Follow our recommended path, starting from Unit 1, or choose a topic
            that interest you!
          </p>
          <div>
            <Row>
              <Col md={{ span: 3, offset: 5 }}>
                <UnitButton button="1" />
              </Col>
              <Col md={{ span: 3 }}>
                <UnitButton button="2" />
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 3, offset: 5 }}>
                <UnitButton button="3" />
              </Col>
              <Col md={{ span: 3 }}>
                <UnitButton button="4" />
              </Col>
            </Row>
          </div>
        </StyledInnerWrapper>
      </BackgroundImage>
    </Layout>
  );
};

export default Overview;
