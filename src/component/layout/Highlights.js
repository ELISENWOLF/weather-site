import { Col, Container, Row } from 'react-bootstrap'
import { TbWind } from 'react-icons/tb'

import '../../styles/highlight.css'

const Highlights = () => {
  return (
    <Container className='highlights'>
      <h4>Today's Highlights</h4>
      <Row>
        <Row>
          <Col xl={6} className='air-details'>
            <div className='top-left-head'>
              <h6>Air Quantity Index</h6>
              <span>Very Poor</span>
            </div>
            <Col className='air-measure'>
              <Col><TbWind className='wind-icon'/></Col>
              <Col className='air-value'><span>PM25</span><h3>177</h3></Col>
              <Col className='air-value'><span>SO<sub>2</sub></span><h3>29.8</h3></Col>
              <Col className='air-value'><span>NO<sub>2</sub></span><h3>43.2</h3></Col>
              <Col className='air-value'><span>O<sub>3</sub></span><h3>0.150</h3></Col>
            </Col>
          </Col>
          <Col>

          </Col>
        </Row>
        <Row>

        </Row>
      </Row>
    </Container>
  )
}

export default Highlights