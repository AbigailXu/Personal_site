import React, { Component, Fragment, useRef } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NavBar.css'

function NavBar(props) {
  const {
    headerRefScroll,
    expertiseRefScroll,
    projectRefScroll,
    experienceRefScroll,
    contactRefScroll,
  } = props

  console.log(headerRefScroll)

  return (
    <Fragment>
      <Navbar bg="none" variant="dark" expand="lg" fixed="false">
        <Container className="nav">
          <Navbar.Brand href="#home nav-brand">abigail-xu.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Item
                className="nav-link"
                onClick={headerRefScroll}
              >
                • Home
              </Nav.Item>
              <Nav.Item
                className="nav-link"
                onClick={expertiseRefScroll}
              >
                • Expertise
              </Nav.Item>
              <Nav.Item
                className="nav-link"
                onClick={projectRefScroll}
              >
                • Projects
              </Nav.Item>
              <Nav.Item
                className="nav-link"
                onClick={experienceRefScroll}
              >
                • Experience
              </Nav.Item>
              <Nav.Item
                className="nav-link"
                onClick={contactRefScroll}
              >
                • Contact
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default NavBar
