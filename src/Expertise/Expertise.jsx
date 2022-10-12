import { Card, Container, Row, Col, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Expertise.css'

let expertiseList = [
  {
    title: 'Software Dev, Deep Learning',
    body:
      'Skilled in both functional programing and OOP. Experienced in: data structures, deep learning, dynamic programing, operating system, and more.',
    skills: ['Bash', 'C', 'C++', 'Java', 'Python', 'OOP', 'R'],
    icon: ['fas', 'desktop'],
  },
  {
    title: 'Frontend Development',
    body:
      '3+ years of experience in cross-platform UI/UX design and development.',
    skills: ['Bootstrap', 'CSS', 'HTML', 'JavaScript', 'TypeScript', 'Kotlin', 'React.js'],
    icon: ['fab', 'react'],
  },
  {
    title: 'Backend Development',
    body:
      '3+ years of experience in Spring Boot service and JS-based backend development.',
    skills: ['Express.js', 'Go','GWT', 'Java', 'MongoDB', 'Node.js', 'RESTful API', 'Spring Boot', 'SQL'],
    icon: ['fas', 'network-wired'],
  },
]

function Expertise() {
  return (
    <div id="expertise">
      <h2 id="expertise-title">My Expertise</h2>
      <Container>
        <Row>{expertiseList.map((it) => renderCard(it))}</Row>
      </Container>
    </div>
  )
}

function renderCard(exper) {
  return (
    <Col>
      <Card className="expertise-card" border="light">
        <Card.Body>
          <Container>
            <Row>
              <Col sm={3}>
                <FontAwesomeIcon className="expertise-icon" icon={exper.icon} />
              </Col>
              <Col sm={9}>
                <Card.Title className="expertise-cardtitle">
                  <strong>{exper.title}</strong>
                </Card.Title>
              </Col>
            </Row>
          </Container>
          <Card.Text className="expertise-cardtext">{exper.body}</Card.Text>

          <Card.Text className="expertise-cardtext">
            {exper.skills.map((it) => renderSkills(it))}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

function renderSkills(skill) {
  return (
    <Badge pill className="badge expertise-skill">
      {skill}
    </Badge>
  )
}

export default Expertise
