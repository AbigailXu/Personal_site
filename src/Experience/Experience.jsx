import React, { useState } from 'react'
import { Card, Container, Row, Col, Accordion } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'

import './Experience.css'
import SW from '../images/shareworks-by-morgan-stanley.png'
import Loblaw from '../images/Loblaw Companies Limited.png'
import UW from '../images/uw-icon.png'
import FordPro from '../images/FordPro.jpg'

let jobList = [
  {
    title: 'Software Engineer',
    institution: 'Ford Motor Company of Canada Limited - Ford Pro',
    date: '1/2023 - 4/2023',
    text:
      'Developed and maintained a scalable, secure, highly responsive abstraction layer, using Java and GCP, enabling seamless API interaction between providers and consumers of Ford Pro’s sales solution.',
    img: FordPro,
    skills: ['Java', 'GCP', 'OpenApi', 'Datadog'],
  },{
    title: 'Software Engineer',
    institution: 'Loblaw Companies Limited',
    date: '05/2022 - 08/2022',
    text:
      'Designed and developed 4 industry-standard Spring Boot microservices to supports the company’s supply chain management and data feed.',
    img: Loblaw,
    skills: ['Java', 'Spring Boot', 'SQL', 'MongoDB', 'microservice'],
  },
  {
    title: 'Full-Stack Software Developer',
    institution: 'Shareworks by Morgan Stanley',
    date: '09/2021 - 12/2021',
    text:
      'Participated in development of the B-to-B software product in the Global Private Market Liquidity Team of Morgan Stanley’s wealth management division.',
    img: SW,
    skills: ['Java', 'GWT', 'SQL', 'React.js'],
  },{
    title: 'Java Programming Tutor',
    institution: 'TeacherOn.com',
    date: '10/2020 - 01/2021',
    text:
      'Conducted online lectures, designed lessons, and helped students to develop a fundamental understanding of Java programming.',
    img: null,
    skills: ['Java'],
  }
]
let educationList = [
  {
    title: 'Bachelor of Computer Science',
    institution: 'University Of Waterloo',
    date: '09/2020 - 04/2025',
    text: 'Candidate of Bachelor of Computer Science, graduating in 2025    ',
    img: UW,
    skills: ['Bash', 'C', 'C++', 'Kotlin', 'OOP', 'R'],
  },
]
let certificatesList = [
  {
    title: 'Deep Learning',
    institution: '  ',
    date: '09/2020 - 04/2025',
    text: '',
    img: '',
    skills: [''],
  },
]

function Experience() {
  return (
    <dev>
      <Container id="experience">
        <Row>
          <Col>
            <h2 id="experience-maintitle">
              <span>My Jo</span>urney
            </h2>
          </Col>
        </Row>

        {/* Professional Experience */}

        <Row>
          <Col sm="3">
            <h2 className="experience-type">Professional Experience</h2>
          </Col>
          <Col>
            <Accordion className="experience-accordion" defaultActiveKey="0">
              {jobList.map((it) => randerAccordion(it))}
            </Accordion>
          </Col>
        </Row>

        {/* Education */}

        <Row>
          <Col sm="3">
            <h2 className="experience-type">Education</h2>
          </Col>
          <Col>
            <Accordion className="experience-accordion" defaultActiveKey="0">
              {educationList.map((it) => randerAccordion(it))}
            </Accordion>
          </Col>
        </Row>

        {/* Certificates */}

        {/* <Row>
          <Col sm="3">
            <h2 className="experience-type">Certificates</h2>
          </Col>
          <Col>
            <Accordion className="experience-accordion" defaultActiveKey="0">
              {certificatesList.map((it) => randerAccordion(it))}
            </Accordion>
          </Col>
        </Row> */}
      </Container>
    </dev>
  )
}

function randerAccordion(exp) {
  return (
    <Card className="experience-card">
      <Accordion.Toggle as={Card.Header} eventKey={exp.date}>
        <Container className="experience-onecontainer">
          <Row>
            <Col sm="8" className="experience-title">
              <div className="experience-name">{exp.title}</div>
              <div className="experience-inst">{exp.institution}</div>
            </Col>
            <Col sm="3" className="experience-date">
              {exp.date}
            </Col>
            <Col sm="1" className="experience-plus">
              +
            </Col>
          </Row>
        </Container>
      </Accordion.Toggle>
      <Accordion.Collapse className="experience-body" eventKey={exp.date}>
        <Card.Body className="experience-body">
          <Container>
            <Row>
              <Col sm="9">
                <Row className="experience-text">{exp.text}</Row>
                <Row>{exp.skills.map((it) => renderSkills(it))}</Row>
              </Col>
              <Col>
                {exp.img != null ? <img className="experience-img" src={exp.img} alt="logo" /> : <></>}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

function renderSkills(skill) {
  return (
    <Badge pill className="badge m-2 experience-skill">
      {skill}
    </Badge>
  )
}

export default Experience
