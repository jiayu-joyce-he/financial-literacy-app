import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    style={{ position: "sticky", top: "0", width: " 100%", zIndex: "100" }}
  >
    <Navbar.Brand as={Link} href="/" to="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem href="/pre-quiz">
          <Nav.Link as={Link} activeClassName="active" to="/pre-quiz">
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
        <NavItem href="/unit2">
          <Nav.Link as={Link} activeClassName="active" to="/unit2">
            Unit 2
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
