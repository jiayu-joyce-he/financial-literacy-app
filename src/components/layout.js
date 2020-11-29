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

  const isUnit = (typeof window !== "undefined"
    ? window.location.href
    : ""
  ).includes("unit");
  console.log("isUnit", isUnit);

  // const UnitProgress = () => {
  //   return (
  //     <StyledUnitBannerWrapper>
  //       <p>Unit 1: What is the time value of money?</p>
  //       <ProgressBar variant="success" now={40} />
  //     </StyledUnitBannerWrapper>
  //   );
  // };

  const SidebarWrapper = styled.div`
    .sidebar {
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      padding: 48px 0 0;
      box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
    }
  `;

  // const SideBar = props => {
  //   return (
  //     <SidebarWrapper>
  //       <Nav
  //         className="col-md-12 d-none d-md-block bg-light sidebar"
  //         activeKey="/home"
  //         onSelect={selectedKey => alert(`selected ${selectedKey}`)}
  //       >
  //         <div className="sidebar-sticky"></div>
  //         <Nav.Item>
  //           <Nav.Link href="/home">Active</Nav.Link>
  //         </Nav.Item>
  //         <Nav.Item>
  //           <Nav.Link eventKey="link-1">Link</Nav.Link>
  //         </Nav.Item>
  //         <Nav.Item>
  //           <Nav.Link eventKey="link-2">Link</Nav.Link>
  //         </Nav.Item>
  //         <Nav.Item>
  //           <Nav.Link eventKey="disabled" disabled>
  //             Disabled
  //           </Nav.Link>
  //         </Nav.Item>
  //       </Nav>
  //     </SidebarWrapper>
  //   );
  // };

  // console.log("children", children);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        {isUnit ? (
          <>
            {/* <Container fluid>
              <Row>
                <Col xs={3} id="sidebar-wrapper">
                  <SideBar />
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
