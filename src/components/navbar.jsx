import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/navbar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <Navbar bg="light" expand="">
          <Container className="navbar-container">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <FontAwesomeIcon className="nav-icon" icon={["fas", "bars"]} />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="list-group">
                  <a
                    href="/"
                    className="list-group-item list-group-item-action active"
                    aria-current="true"
                  >
                    ABOUT ME
                  </a>
                  <a
                    href="/"
                    className="list-group-item list-group-item-action"
                  >
                    PROJECTS
                  </a>
                  <a
                    href="/"
                    className="list-group-item list-group-item-action"
                  >
                    CONTACT
                  </a>
                  <a
                    href="/"
                    className="list-group-item list-group-item-action "
                  >
                    SAY HI
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavBar;
