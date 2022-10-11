import React, { useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Projects.css'

import EmpowerChange from '../images/empowerchange_mockup.png'
import Studier_s from '../images/Studier-s.png'
import LCT from '../images/LCT.png'
import Currency from '../images/currency.png'
import Star from '../images/star.png'

let projectsList = [
  {
    name: 'EmpowerChange (web app)',
    img: EmpowerChange,
    text:
      'The full-stack web application of non-profit mental health corporation EmpowerChange. Supports volunteer-applicant matching, consulting session booking, and user login. Developed with 3 other volunteers.',
    url: 'https://empowerchangeglobal.com/',
    type: "web"
  },
  {
    name: "Studier's (web app)",
    img: Studier_s,
    text:
      'A full-stack web application using: HTML, CSS, JavaScript, React.js, Bootstrap, Node.js, Express.js, MongoDB. Provides an integrated learning-toolbox that allows students to managing tasks and play study',
    url: 'https://studier-s.netlify.app/',
    type: "web"
  },
  {
    name: 'Linear Congruence Solver (Java program)',
    img: LCT,
    text:
      'A program developed using Java and NetBeans IDE for solving linear congruence problems and generating detailed and intuitive calculation processes.',
    url: 'https://github.com/AbigailXu/Linear-Congruence-Solver',
    type: "other"
  },
  {
    name: 'Currency Converter (Chrome extension)',
    img: Currency,
    text:
      'Automatically convert the currency on websites to the currency set by the user. Project for Hacks the North 2021, developed with 2 team members',
    url: 'https://github.com/hzhou0/currency_converter',
    type: "other"
  },
  {
    name: 'Stars-pedia (website)',
    img: Star,
    text:
      'An astronomy-based educational website using HTML, CSS, JavaScript. Project for Ignition Hacks 2020, developed with 3 team members.',
    url: 'https://github.com/lxl011212/Stars-pedia',
    type: "web"
  },
]

function Projects() {
  const [displayList, setDisplayList] = useState(projectsList.slice(1))

  return (
    <div id="project">
      <Container>
        <Row>
          <Col sm="4">
            <h2 id="project-title">My Projects</h2>
            <p id="project-featuretext">{projectsList[0].text}</p>
          </Col>
          <Col>
            <img
              id="project-featureimg"
              src={projectsList[0].img}
              alt={projectsList[0].img}
            />
          </Col>
        </Row>
        <Row>
          <h5 id="project-filter">
            Filter by: &nbsp;&nbsp;
            <span className="project-filteritem" onClick={() => setDisplayList(projectsList.slice(1))}>All</span>{' '}
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <span className="project-filteritem" onClick={() => setDisplayList(projectsList.slice(1).filter(it=>(it.type==="ai")))}>Deep Learning</span>{' '}
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <span className="project-filteritem" onClick={() => setDisplayList(projectsList.slice(1).filter(it=>(it.type==="web")))}>Web Development</span>{' '}
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <span className="project-filteritem" onClick={() => setDisplayList(projectsList.slice(1).filter(it=>(it.type==="other")))}>Others</span>
          </h5>
        </Row>
      </Container>

      <Container id="project-cardcontainer">
        <Row>{displayList.map((it) => renderCard(it))}</Row>
      </Container>
    </div>
  )
}

function renderCard(p) {
  return (
    <Col sm="4">
      <Card className="project-card">
        <Card.Header className="project-cardhead">
            <Card.Img className="project-cardimg" variant="top" src={p.img} alt={p.img} />
        </Card.Header>
        
        <Card.Body>
          <Card.Title className="project-cardtitle">
            <strong>{p.name}</strong>
          </Card.Title>

          <Card.Text className="project-cardtext">{p.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Projects
