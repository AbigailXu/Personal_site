import { Card, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Contact.css'

function Contact() {
  return (
    <div id="contact">
      <Container id="contact-container">
        <Row>
          <h2 id="contact-title">Contact</h2>
        </Row>

        <Row>
          <Col>
            <h3
              id="contact-email"
              onClick={() => window.open('mailto:x389xu@uwaterloo.ca')}
            >
              x389xu@uwaterloo.ca
            </h3>
          </Col>
        </Row>
        <Row>
          <Col
            className="social-media-col"
            onClick={() =>
              window.open('https://www.linkedin.com/in/xianglei-xu/')
            }
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={['fab', 'linkedin']}
            />
            <span>&nbsp;&nbsp;&nbsp; Linkedin</span>
          </Col>
        </Row>
        <Row>
          <Col
            className="social-media-col"
            onClick={() => window.open('https://github.com/AbigailXu')}
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={['fab', 'github-square']}
            />
            <span>&nbsp;&nbsp;&nbsp; GitHub</span>
          </Col>
        </Row>
        <Row>
          <Col
            className="social-media-col"
            onClick={() =>
              window.open('https://www.instagram.com/abigail_ouo/')
            }
          >
            <FontAwesomeIcon
              className="social-media-icon"
              icon={['fab', 'instagram-square']}
            />
            <span>&nbsp;&nbsp;&nbsp; Instagram</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
