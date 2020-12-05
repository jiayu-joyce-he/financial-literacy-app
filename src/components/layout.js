/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import {
  Container,
  ProgressBar,
  Nav,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";

import Header from "./header";
import {
  StyledUnitBannerWrapper,
  StyledSectionWrapper,
} from "../components/SharedStyledComponents";
import "./layout.scss";

const StyledFooter = styled.div`
  position: absolute;
  width: 100%;
  height: 60px; /* Height of the footer */
  @media screen and (min-height: 700px) {
    bottom: 0;
  }
  @media screen and (max-height: 700px) {
    display: none;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const isUnit = (typeof window !== "undefined"
    ? window.location.href
    : ""
  ).includes("unit");

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        {isUnit ? (
          <>
            {/* <Container fluid>
              <Row>
                <Col xs={3} id="sidebar-wrapper">
                  <UnitContent />
                </Col>
                <Col xs={9} id="page-content-wrapper">
                  <UnitProgress />
                  {children}
                </Col>
              </Row>
            </Container> */}
            <Container fluid>{children}</Container>
          </>
        ) : (
          <Container fluid="lg">{children}</Container>
        )}
        {!isUnit && (
          <StyledFooter className="footer mt-auto py-3 bg-dark text-white text-center">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </StyledFooter>
        )}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
