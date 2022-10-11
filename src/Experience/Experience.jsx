import React, { useState } from 'react'
import { Card, Container, Row, Col, Accordion } from 'react-bootstrap'

import './Experience.css'

let jobList = [{ text: '' }]
let educationList = [{ text: '' }]
let certificatesList = [{ text: '' }]

function Experience() {
  return (
    <dev>
      <Container id="experience">
        <Row>
          <Col sm="5">
            <h2 id="experience-title">Professional Experience</h2>
            <p id="experience-featuretext">{jobList[0].text}</p>
          </Col>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>

        <Row>
          <Col sm="3">
            <h2 id="experience-title">Education</h2>
            <p id="experience-featuretext">{educationList[0].text}</p>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col sm="3">
            <h2 id="experience-title">Certificates</h2>
            <p id="experience-featuretext">{certificatesList[0].text}</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </dev>
  )
}

export default Experience
