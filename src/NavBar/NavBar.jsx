import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NavBar.css'

function NavBar() {
  return (
    <Fragment>
      <Navbar  bg="none" variant="dark" expand="lg" fixed="false">
        <Container className="nav">
          <Navbar.Brand href="#home nav-brand">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link className="nav-link" href="#Home">• Home</Nav.Link>
              <Nav.Link className="nav-link" href="#Expertise">• Expertise</Nav.Link>
              <Nav.Link className="nav-link" href="#Projects">• Projects</Nav.Link>
              <Nav.Link className="nav-link" href="#Experience">• Experience</Nav.Link>
              <Nav.Link className="nav-link" href="#Contact">• Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default NavBar
