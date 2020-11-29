import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} href="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            Pre-quiz
          </Nav.Link>
        </NavItem>
        <NavItem href="/course-outline">
          <Nav.Link as={Link} activeClassName="active" to="/course-outline">
            Course outline
          </Nav.Link>
        </NavItem>
        <NavItem href="/unit1">
          <Nav.Link as={Link} activeClassName="active" to="/unit1">
            Unit 1
          </Nav.Link>
        </NavItem>
      </Nav>
      {/* <Nav className="ml-auto">
        <Button variant="success" onClick={() => alert("Sign Up")}>
          Sign Up
        </Button>
      </Nav> */}
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
