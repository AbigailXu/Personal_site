import { Card, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './Expertise.css'

let expertiseList = [
  {
    title: 'Software Dev, Deep Learning',
    body: 'awiluefb niwue lew a fsd cw a fw a fsd w a fsd cfw ehlfn wiejlu fbacfw ehlfn wiejlu fbasd cfw ehlfn wiejlu fbafw ehlfn wiejlu fbasd cfw ehlfn wiejwi uefbni wuele waf sd cfwe hlfnwie jlufb',
    icon: ['fas','desktop'],
  },
  {
    title: 'Frontend Development',
    body: 'awiluefb niwue lew a fsd cfww a fsd cw a fsd cfw ehlfn wiejlu fbafw ehlfn wiejlu fba ew a fsd cfw ehlfn wiejlu fbahlfn wiejlu fbawi uesd cfw ehlfn wiejfbni wuele waf sd cfwe hlfnwie jlufb',
    icon: ['fab', 'react'],
  },
  {
    title: 'Backend Development',
    body: 'awiluefb niwue lew a fsw a fsd cfww a fsd cfwaefr ehlfn wiejlu fba ehlfn wiejlu fbad cfw ehlfsd cfw ehlfn wiejn wiejw a fsd cfw ehlfn wiejlu fbalu fbawi uefbni wuele waf sd cfwe hlfnwie jlufb',
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
                <Col sm={3}><FontAwesomeIcon className="expertise-icon" icon={exper.icon}/></Col>
                <Col sm={9}><Card.Title className="expertise-cardtitle"><strong>{exper.title}</strong></Card.Title></Col>
            </Row>
          </Container>
          
          <Card.Text className="expertise-cardtext">{exper.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Expertise
