import React, { Component } from "react";
import "../styles/projects.css";
import { Row, Col, Card } from "react-bootstrap";

import Studier_s from "../images/Studier-s.png";
import LCT from "../images/LCT.png";
import Currency from "../images/currency.png";
import Star from "../images/star.png";

class Projects extends Component {
  state = {
    Projects: [
      {
        name: "Studier's (web app)",
        img: Studier_s,
        text: "A dynamic, full-stack web application using: HTML, CSS, JavaScript, React.js, Bootstrap, Node.js, Express.js, MongoDB. Provides an integrated learning-toolbox that allows students to managing tasks and play study",
        url:"https://studier-s.netlify.app/"
      },
      {
        name: "Linear Congruence Solver (Java program)",
        img: LCT,
        text: "A program developed using Java and NetBeans IDE for solving linear congruence problems and generating detailed and intuitive calculation processes.",
        url: "https://github.com/AbigailXu/Linear-Congruence-Solver"
      },
      {
        name: "Currency Converter (Chrome extension)",
        img: Currency,
        text: "Automatically convert the currency on websites to the currency set by the user. Project for Hacks the North 2021, developed with 2 team members",
        url: "https://github.com/hzhou0/currency_converter"
      },
      {
        name: "Stars-pedia (website)",
        img: Star,
        text: "An astronomy-based educational website using HTML, CSS, JavaScript. Project for Ignition Hacks 2020, developed with 3 team members.",
        url: "https://github.com/lxl011212/Stars-pedia"
      },
    ],
  };

  render() {
    const p = this.state.Projects;
    console.log(p);
    return (
      <div className="about-project-container">
        <h1 className="about-project-title">PROJECTS & SNIPPETS</h1>
        <div className="projects-inner-container">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card className="card" onClick={() =>
                    window.open(p[idx].url)
                  }>
                <Card.Img variant="top" src={p[idx].img} />
                <Card.Body>
                  <Card.Title>{p[idx].name}</Card.Title>
                  <Card.Text>{p[idx].text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
      </div>
    );
  }
}

export default Projects;
